import { createSlice } from '@reduxjs/toolkit';
import { DataModel } from '../../models/DataModel';

interface CharactersState {
  isLoading: boolean;
  data: DataModel | null;
}

export const initialState: CharactersState = {
  isLoading: false,
  data: null,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state) => {
      state.isLoading = true;
    },
    getCharactersSuccess: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    getCharactersFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCharacters, getCharactersSuccess, getCharactersFailure } = charactersSlice.actions;
export default charactersSlice.reducer;
