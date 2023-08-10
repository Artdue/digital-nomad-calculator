import { createSlice } from '@reduxjs/toolkit';
import navApi from './thunks/user/nav.api';
import userRegister from './thunks/user/reg.api';
import userLogin from './thunks/user/log.api';
import userLogout from './thunks/user/logout.api';

const initialState = {
  email: '',
  admin: false,
  auth: false,
  msg: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        console.log('pending');
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = false;
      })
      .addCase(userLogin.rejected, (state) => {
        console.error('ERROR!');
      })
      .addCase(userRegister.pending, (state) => {
        console.log('pending');
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = true;
      })
      .addCase(userRegister.rejected, (state) => {
        console.log('ERROR!');
      })
      .addCase(userLogout.pending, (state) => {
        console.error('pending');
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = false;
      })
      .addCase(userLogout.rejected, (state) => {
        console.error('ERROR!');
      })
      .addCase(navApi.pending, (state) => {
        console.log('pending');
      })
      .addCase(navApi.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.auth = true;
      })
      .addCase(navApi.rejected, (state) => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default userSlice.reducer;
