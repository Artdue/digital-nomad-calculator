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
      .addCase(nodemailerSend.pending, () => {})
      .addCase(nodemailerSend.fulfilled, (state) => {
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(nodemailerSend.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(userNod.pending, () => {})
      .addCase(userNod.fulfilled, (state) => {
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(userNod.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(nodemailerAdminSend.pending, () => {})
      .addCase(nodemailerAdminSend.fulfilled, () => {})
      .addCase(nodemailerAdminSend.rejected, () => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default nodeSlice.reducer;
