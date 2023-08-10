import { createAsyncThunk } from '@reduxjs/toolkit';

const userRegister = createAsyncThunk('reg', async (reg) => {
  try {
    const response = await fetch('http://localhost:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(reg),
    });
    const res = await response.json();
    return res;
  } catch (error) {
    console.log('Ошибка регистрации', error);
  }
});

export default userRegister;
