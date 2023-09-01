import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const editUser = createAsyncThunk('admin/editState', async (data) => {
  console.log('=============> Я В САНКЕ id', data.id);
  console.log('=============> Я В САНКЕ data', data.data);
  try {
    const { id, data } = data;
    const response = await axios.put(`http://localhost:3000/admin/users/${id}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
