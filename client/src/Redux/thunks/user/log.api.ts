import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ILogin } from '../../../Types/types';

const userLogin = createAsyncThunk('log', async (login: ILogin) => {
  try {
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(login),
    });
    const res = await response.json();
    if (response.ok) {
      return res;
    }
    return { status: 'error', error: 'Login failed' };
  } catch (error) {
    console.error('Oops', error);
    return { status: 'error', error: 'An error occurred' };
  }
});

export default userLogin;
