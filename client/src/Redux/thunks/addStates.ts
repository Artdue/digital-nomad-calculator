import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addState = createAsyncThunk('admin/addState', async (newState) => {
  try {
    const response = await axios.post('http://localhost:3000/admin', newState);
    return response.data;
  } catch (error) {
    throw error;
  }
});
