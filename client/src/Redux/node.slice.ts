import { createSlice } from '@reduxjs/toolkit';
import nodemailerSend from './thunks/nodemailer';
import userNod from './thunks/userNod';
import nodemailerAdminSend from './thunks/nodemaileradmin';

const initialState = {
  message: 'Оставьте заявку, и наш специалист свяжется с вами',
};

const nodeSlice = createSlice({
  name: 'node',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nodemailerSend.pending, () => {
        console.log('pending');
      })
      .addCase(nodemailerSend.fulfilled, (state) => {
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(nodemailerSend.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(userNod.pending, () => {
        console.log('pending');
      })
      .addCase(userNod.fulfilled, (state) => {
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(userNod.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(nodemailerAdminSend.pending, () => {
        console.log('pending');
      })
      .addCase(nodemailerAdminSend.fulfilled, () => {
        // state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(nodemailerAdminSend.rejected, () => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default nodeSlice.reducer;
