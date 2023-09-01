import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ILogin } from '../../Types/types';

const logAdmin = createAsyncThunk('logAdmin', async (loginAdmin: ILogin) => {
  try {
    const response: Response = await fetch('http://localhost:3000/mainAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(loginAdmin),
    });
    const res = await response.json();
    if (response.ok) {
      return res;
    }
  } catch (error) {
    console.error('Oops', error);
    return { status: 'error', error: 'An error occurred' };
  }
});

export default logAdmin;
