import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchStates from './states.api';

const getStates = createAsyncThunk('states/getStates', async () => {
  try {
    const response = await fetchStates();
    return response;
  } catch (error) {
    return Promise.reject(new Error('400'));
  }
});
export default getStates;
