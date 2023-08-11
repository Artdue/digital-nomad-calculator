import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './thunks/getUsers';

const adminUserSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    loading: false,
    error: null,
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
      });
  },
});

export default adminUserSlice.reducer;
