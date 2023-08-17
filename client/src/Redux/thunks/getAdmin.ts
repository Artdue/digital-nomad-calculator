import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAdmin = createAsyncThunk('admin/getStates', async () => {
  try {
    const response = await axios.get('http://localhost:3000/admin');
    return response.data;
  } catch (error) {
    throw error;
  }
});
