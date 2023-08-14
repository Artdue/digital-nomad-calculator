import { createSlice } from '@reduxjs/toolkit';
import nodemailerSend from './thunks/nodemailer';

const initialState = {
  message: '',
};

const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nodemailerSend.pending, (state) => {
        console.log('pending');
      })
      .addCase(nodemailerSend.fulfilled, (state) => {
        // state.email = action.payload.email;
        // state.admin = action.payload.admin;
        // state.msg = action.payload.msg;
        // state.auth = false;
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(nodemailerSend.rejected, (state) => {
        console.error('ERROR!');
      })

      .addDefaultCase(() => {});
  },
});
export default nodeSlice.reducer;
