import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ILogin } from '../../Types/types';
import type { IInitialState } from '../store.types';

const logAdmin = createAsyncThunk<IInitialState, ILogin>('logAdmin', async (loginAdmin: ILogin) => {
  try {
    const response: Response = await fetch('http://localhost:3000/mainAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(loginAdmin),
    });
    const res = (await response.json()) as IInitialState;
    if (response.ok) {
      return res;
    }
    return { status: 'error', error: 'Login failed' } as IInitialState;
  } catch (error) {
    console.error('Oops', error);
    return { status: 'error', error: 'An error occurred' } as IInitialState;
  }
});

export default logAdmin;
