import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getUsers = createAsyncThunk('admin/users', async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin/users');
    return response.data;
  } catch (error) {
    throw error;
  }
});
