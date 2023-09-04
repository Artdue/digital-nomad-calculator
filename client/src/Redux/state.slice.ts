import { createSlice } from '@reduxjs/toolkit';
import type { IstateType } from './store.types';
import getStates from './thunks/getStates';

const initialState: IstateType = {
  states: [],
  loading: false,
};

const stateSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStates.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.loading = false;
        state.states = action.payload;
      })
      .addCase(getStates.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default stateSlice.reducer;
