import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ILogin } from '../../../Types/types';
import type { IInitialState } from '../../store.types';

const userLogin = createAsyncThunk<IInitialState, ILogin>('log', async (login: ILogin) => {
  try {
    const response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(login),
    });
    const res = (await response.json()) as IInitialState;
    if (response.ok) {
      return res;
    }
    return { status: 'error', error: 'Login failed' } as IInitialState;
  } catch (error) {
    return { status: 'error', error: 'An error occurred' } as IInitialState;
  }
});

export default userLogin;
