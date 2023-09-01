import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ILogin } from '../../../Types/types';

const userRegister = createAsyncThunk('reg', async (reg: ILogin) => {
  try {
    const response = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(reg),
    });
    const res = await response.json();
    if (response.ok) {
      return res;
    }
    return { status: 'error', error: 'Login failed' };
  } catch (error) {
    console.error('Oops REG', error);
    return { status: 'error', error: 'An error occurred' };
  }
});

export default userRegister;
