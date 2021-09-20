import { createSlice } from '@reduxjs/toolkit';
import { DataModel } from '../../models/DataModel';

interface CharacterState {
  isLoading: boolean;
  data: DataModel | null;
}

const initialState: CharacterState = {
  isLoading: false,
  data: null,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    getCharacter: (state) => {
      state.isLoading = true;
    },
    getCharacterSuccess: (state, { payload }) => {
      state.data = payload;
    },
    getCharacterFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getCharacter, getCharacterSuccess, getCharacterFailure } = characterSlice.actions;
export default characterSlice.reducer;
