import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IEditUserInputs2 } from '../../Types/calcTypes';
import type { IInitialState } from '../store.types';
import type { IUser } from '../../Types/types';

export const profileGet = createAsyncThunk<IUser, IInitialState>(
  'getUser',
  async (user: IInitialState) => {
    try {
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response: Response = await fetch('http://localhost:3000/changeProfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(user),
      });
      const res = (await response.json()) as Promise<IUser>;
      return await res;
    } catch (error) {
      console.error('Oops', error);
      return Promise.reject(new Error('400'));
    }
  },
);

export const profilePut = createAsyncThunk<IUser, IEditUserInputs2>(
  'putUser',
  async (editUser: IEditUserInputs2) => {
    try {
      // eslint-disable-next-line no-promise-executor-return
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch('http://localhost:3000/changeProfile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(editUser),
      });
      const res = (await response.json()) as Promise<IUser>;
      return await res;
    } catch (error) {
      console.error('Oops', error);
      return Promise.reject(new Error('400'));
    }
  },
);
