import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCharacter, getCharacterSuccess, getCharacterFailure } from '../slices/characterSlice';

export const fetchCharacterById = createAsyncThunk<void, string>(
  'character/fetchCharacterById',
  async (id, thunkAPI) => {
    thunkAPI.dispatch(getCharacter());

    try {
      const response = await fetch(`https://the-one-api.dev/v2/character/${id}`, {
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer epl1FjsX01RLrlC4cVqe',
        },
      });
      const data = await response.json();
      thunkAPI.dispatch(getCharacterSuccess(data));
    } catch (error) {
      thunkAPI.dispatch(getCharacterFailure());
    }
  }
);
