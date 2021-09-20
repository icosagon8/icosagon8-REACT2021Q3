import { createAsyncThunk } from '@reduxjs/toolkit';
import { PageModel } from '../../models/PageModel';
import { getCharacters, getCharactersFailure, getCharactersSuccess } from '../slices/charactersSlice';

export const fetchCharacters = createAsyncThunk<void, PageModel>(
  'characters/fetchCharacters',
  async (page, thunkAPI) => {
    thunkAPI.dispatch(getCharacters());

    try {
      const { currentPage, limit, sortConfig, search } = page;
      const sort = sortConfig ? `&sort=${sortConfig.key}:${sortConfig.direction}` : '';
      const response = await fetch(
        `https://the-one-api.dev/v2/character?page=${currentPage}&limit=${limit}${sort}&name=/${search}/i`,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer epl1FjsX01RLrlC4cVqe',
          },
        }
      );
      const data = await response.json();
      thunkAPI.dispatch(getCharactersSuccess(data));
    } catch (error) {
      console.log((error as Error).message);
    } finally {
      thunkAPI.dispatch(getCharactersFailure());
    }
  }
);
