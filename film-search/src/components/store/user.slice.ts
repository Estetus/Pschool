import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadState } from './storage';

export interface UserState {
    isLogined: boolean,
    name:string | null
}

  const savedData = loadState('userData');

  const initialState: UserState = {
    isLogined: savedData?.isLogined || false,
    name: savedData?.name || null,
  };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      loginUser: (state, action:PayloadAction<{name: string}>) => {
          state.isLogined = true;
          state.name = action.payload.name
      },
      logoutUser: (state) => {
        state.isLogined = false;
        state.name = null;
        
      },
  }
})

export default userSlice.reducer;
export const userActions = userSlice.actions