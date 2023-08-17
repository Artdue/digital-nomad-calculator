import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editUser = createAsyncThunk('admin/editState', async (stateData) => {
  console.log('=============> Я В САНКЕ' );
  
  try {
    const { id, data } = stateData;
    const response = await axios.put(`http://localhost:3000/admin/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
