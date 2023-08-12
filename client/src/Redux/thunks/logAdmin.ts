import { createAsyncThunk } from '@reduxjs/toolkit';

const logAdmin = createAsyncThunk('logAdmin', async (loginAdmin) => {
  try {
    const response = await fetch('http://localhost:3000/mainAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(loginAdmin),
    });
    const res = await response.json();
    console.log('res', res);
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

export default logAdmin;
