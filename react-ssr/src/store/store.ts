import { configureStore } from '@reduxjs/toolkit';
import characters from './slices/charactersSlice';
import character from './slices/characterSlice';

export const storeInit = configureStore({
  reducer: { characters, character },
});

export type RootState = ReturnType<typeof storeInit.getState>;
export type AppDispatch = typeof storeInit.dispatch;
export type Store = typeof storeInit;
