import { createAsyncThunk } from '@reduxjs/toolkit';

const userLogout = createAsyncThunk('logout', async () => {
  try {
    const res = await fetch('http://localhost:3000/user/logout', {
      credentials: 'include',
    });
    return res;
  } catch (error) {
    console.log('Не смогли выйти', error);
  }
});

export default userLogout;
