import { createSlice } from '@reduxjs/toolkit';
import type { IstateType } from './store.types';

const initialState: IstateType = {
  tasks: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'users',
  loading: false,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        console.log(state.loading);
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        console.log(state.loading);
        state.tasks = action.payload;
      })
      .addCase(getAllTasks.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default userSlice.reducer;
