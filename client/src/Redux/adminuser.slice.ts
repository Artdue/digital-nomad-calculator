import { createSlice } from '@reduxjs/toolkit';
import  getUsers  from './thunks/getUsers';
import  editUser  from './thunks/editUsersList';
import type { IUserType } from './store.types';

const initialState: IUserType = {
  users: [],
  loading: false,
};

const adminUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(editUser.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      });
  },
});

export default adminUserSlice.reducer;
