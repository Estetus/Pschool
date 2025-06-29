import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';
import type { CardProps } from '../Card/Card.props';

export interface FavoriteItem extends CardProps {
  count: number;
  isFavorite?: boolean;
}

export interface CardState {
  favorites:  Record<string, FavoriteItem []>;
}

const savedFavorites = loadState('favorites');

const initialState: CardState = {
  favorites: savedFavorites?.favorites || {}
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{username: string, item: FavoriteItem}>) => {
      const { username, item } = action.payload;
      
      if (!state.favorites[username]) {
        state.favorites[username] = [];
      }
      
      const existingIndex = state.favorites[username].findIndex(i => i.id === item.id);
      
      if (existingIndex === -1) {
        state.favorites[username].push(item);
      }
    },
    remove: (state, action: PayloadAction<{username: string, itemId: string}>) => {
      const { username, itemId } = action.payload;
      state.favorites[username] = state.favorites[username].filter(item => item.id !== itemId);
    }
  }
});

export default cardSlice.reducer;
export const cardActions = cardSlice.actions;