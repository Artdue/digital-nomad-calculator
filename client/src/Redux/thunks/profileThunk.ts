import { createAsyncThunk } from '@reduxjs/toolkit';

export const profileGet = createAsyncThunk('getUser', async (user) => {
  try {
    const response = await fetch('http://localhost:3000/changeProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user),
    });
    const res = await response.json();
    console.log('res', res);
    return res;
  } catch (error) {
    console.error('Oops', error);
  }
});

export const profilePut = createAsyncThunk('putUser', async (user) => {
  try {
    const response = await fetch('http://localhost:3000/changeProfile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Oops', error);
  }
});
