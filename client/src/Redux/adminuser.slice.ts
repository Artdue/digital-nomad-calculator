import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks/getUsers';
import { editUser } from './thunks/editUsersList';

const adminUserSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
  },
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
        // console.log(state.loading);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
       
        //* колхоз, но работает
        state.users = action.payload;
      })
      .addCase(editUser.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
  },
});

export default adminUserSlice.reducer;
