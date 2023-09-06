import { createSlice } from '@reduxjs/toolkit';
import type { IstateType } from './store.types';
import getStates from './thunks/getStates';
import type { Istate } from '../Types/types';

const initialState: IstateType = {
  states: [] as Istate[],
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
        if (action.payload) {
          state.states = action.payload;
        }
      })
      .addCase(getStates.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default stateSlice.reducer;
