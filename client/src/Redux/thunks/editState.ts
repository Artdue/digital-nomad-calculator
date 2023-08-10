import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editState = createAsyncThunk('admin/editState', async (stateData) => {
  try {
    const { id, data } = stateData;
    const response = await axios.put(`http://localhost:3000/admin/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
