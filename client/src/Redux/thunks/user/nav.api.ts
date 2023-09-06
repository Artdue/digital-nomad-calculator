import { createAsyncThunk } from '@reduxjs/toolkit';
import type { INav } from '../../store.types';

const navApi = createAsyncThunk<INav, void>('navApp', () =>
  fetch('http://localhost:3000/user/auth', {
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((result: INav) => result)
    .catch((error) => {
      throw error;
    }),
);
export default navApi;
