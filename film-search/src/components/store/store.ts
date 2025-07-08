import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user.slice';
import { saveState } from './storage';
import { cardSlice } from './card.slice';






export const store = configureStore ({
  reducer: {
    user: userSlice.reducer,
    card: cardSlice.reducer
  }
}); 

store.subscribe(() => {
  saveState(store.getState().user, 'userData');
  saveState({ favorites: store.getState().card.favorites }, 'favorites');
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch