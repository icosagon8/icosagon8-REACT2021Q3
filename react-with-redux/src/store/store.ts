import { configureStore } from '@reduxjs/toolkit';
import characters from './slices/charactersSlice';
import character from './slices/characterSlice';

export const store = configureStore({
  reducer: { characters, character },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
