import { createSlice } from '@reduxjs/toolkit';
import nodemailerSend from './thunks/nodemailer';
import userNod from './thunks/userNod';

const initialState = {
  message: 'Оставьте заявку, и наш специалист свяжется с вами',
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
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(nodemailerSend.rejected, (state) => {
        console.error('ERROR!');
      })
      .addCase(userNod.pending, (state) => {
        console.log('pending');
      })
      .addCase(userNod.fulfilled, (state) => {
        state.message = 'Ваш запрос на консультацию отправлен';
      })
      .addCase(userNod.rejected, (state) => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default nodeSlice.reducer;
