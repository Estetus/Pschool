import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import type { CardProps } from '../Card/Card.props';
import type { CardInProps } from '../../pages/Card/CardIn.props';
import axios from 'axios';
import {URL} from '../helpers/API'

export interface FavoriteItem extends CardProps {
  count: number;
  isFavorite: boolean;
  id: string;
}

export interface CardState {
  favorites:  Record<string, FavoriteItem []>;
  currentMovie: CardInProps | null;
  loading: boolean;
  error: string | null;
}


const savedFavorites = loadState('favorites');

const initialState: CardState = {
  favorites: savedFavorites?.favorites || {},
  currentMovie:  null,
  loading: false,
  error:  null
};

export const fetchMovieDetails = createAsyncThunk(
  'card/fetchMovieDetails',
  async (movieId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${URL}/?tt=${movieId}`);
      
      if (!data.short) {
        throw new Error('Отсутствуют данные');
      }
      return data.short; 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || 'Ошибка загрузки фильма');
      }
      return rejectWithValue((error as Error).message);
    }
  }
);

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{username: string; item: Omit<FavoriteItem, 'isFavorite'>}>) => {
      const { username, item } = action.payload;
      
      if (!state.favorites[username]) {
        state.favorites[username] = [];
      }
      
      if (!state.favorites[username].some(fav => fav.id === item.id)) {
        state.favorites[username].push({
          ...item,
          isFavorite: true 
        });
      }
    },
    remove: (state, action: PayloadAction<{username: string, itemId: string}>) => {
      const { username, itemId } = action.payload;
      state.favorites[username] = state.favorites[username].filter(item => item.id !== itemId);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.currentMovie = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      });
  }
});

export default cardSlice.reducer;
export const cardActions = cardSlice.actions;