import { createAsyncThunk } from '@reduxjs/toolkit';

const userNod = createAsyncThunk('/userNodemailer', async (userData) => {
  try {
    console.log('FETCH');
    await fetch('http://localhost:3000/nodemailer/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    // const result = await response.json();
    return;
  } catch (error) {
    console.error('Oops', error);
  }
});
export default userNod;
