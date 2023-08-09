import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStates } from './states.api';

// eslint-disable-next-line import/prefer-default-export
export const getStates = createAsyncThunk('states/getStates', async () => {
  try {
    const response = await fetchStates();
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
