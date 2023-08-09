import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getStates = createAsyncThunk('admin/getStates', async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin');
    return response.data;
  } catch (error) {
    throw error;

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
