import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from '../../Types/types';
import type { IEditUserInputs2 } from '../../Types/calcTypes';

export const profileGet = createAsyncThunk('getUser', async (user: IUser) => {
  try {
    const response: Response = await fetch('http://localhost:3000/changeProfile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user),
    });
    const res: IUser = await response.json();
    return res;
  } catch (error) {
    console.error('Oops', error);
  }
});

export const profilePut = createAsyncThunk('putUser', async (editUser: IEditUserInputs2) => {
  try {
    console.log('user', editUser);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch('http://localhost:3000/changeProfile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(editUser),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.error('Oops', error);
    return Promise.reject(new Error('400'));
  }
});
