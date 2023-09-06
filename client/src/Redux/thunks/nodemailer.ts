import { createAsyncThunk } from '@reduxjs/toolkit';
import type { FormInputs } from '../../Types/types';

const nodemailerSend = createAsyncThunk('/nodemailer', async (inputs: FormInputs) => {
  try {
    await fetch('http://localhost:3000/nodemailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
  } catch (error) {
    console.error('Oops', error);
  }
});
export default nodemailerSend;
