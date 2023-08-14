import { createAsyncThunk } from '@reduxjs/toolkit';


export const nodemailerSend = createAsyncThunk('/nodemailer', async (inputs) => {
    try{
    const response = await fetch('http://localhost:3000/nodemailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });
const result = response.json();
return await result;
    }
    catch(error){
        console.error('Oops', error);
    }
});