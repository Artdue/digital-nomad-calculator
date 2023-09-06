import { createAsyncThunk } from '@reduxjs/toolkit';
import type { IUser } from '../../Types/types';

const userNod = createAsyncThunk('/userNodemailer', async (userData: IUser) => {
  try {
    console.log('FETCH');
    await fetch('http://localhost:3000/nodemailer/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.error('Oops', error);
  }
});
export default userNod;
