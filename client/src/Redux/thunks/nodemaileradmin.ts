import { createAsyncThunk } from '@reduxjs/toolkit';

const nodemailerAdminSend = createAsyncThunk('/nodemailer/admin', async (user) => {
  console.log('FETCH');
  try {
    await fetch('http://localhost:3000/nodemailer/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  } catch (error) {
    console.error('Oops', error);
  }
});
export default nodemailerAdminSend;
