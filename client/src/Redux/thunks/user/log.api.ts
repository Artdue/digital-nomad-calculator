import { createAsyncThunk } from '@reduxjs/toolkit';

const userLogin = createAsyncThunk('log', async (login) => {
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
    } else {
      return { status: 'error', error: 'Login failed' };
    }
  } catch (error) {
    console.error('Oops', error);
    return { status: 'error', error: 'An error occurred' };
  }
});

export default userLogin;
