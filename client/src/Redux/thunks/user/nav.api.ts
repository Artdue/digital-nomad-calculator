import { createAsyncThunk } from '@reduxjs/toolkit';

const navApi = createAsyncThunk('navApp', async () => {
  return fetch('http://localhost:3000/user/auth', {
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((result) => result);
});

export default navApi;
