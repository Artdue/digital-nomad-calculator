import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteState = createAsyncThunk('admin/deleteState', async (id) => {
  try {
    
    const response = await axios.delete(`http://localhost:3000/admin/${id}`);
    return response.data;
    console.log(data);
  } catch (error) {
    throw error;
  }
});