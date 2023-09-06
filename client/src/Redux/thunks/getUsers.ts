import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import type { IUser } from '../../Types/types';

const getUsers = createAsyncThunk<IUser[]>('admin/users', async () => {
  const response: AxiosResponse<IUser[]> = await axios.get('http://localhost:3000/admin/users');
  return response.data;
});

export default getUsers;
