import { createSlice } from '@reduxjs/toolkit';
import type { IstateType } from './store.types';
import { getStates } from './thunks/getStates';
import { addState } from './thunks/addStates';
import { deleteState } from './thunks/deleteState';
import { editState } from './thunks/editState';

const initialState: IstateType = {
  states: [],
  loading: false,
};

const adminSlice = createSlice({
  name: 'states',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStates.pending, (state) => {
        state.loading = true;
        // console.log(state.loading);
      })
      .addCase(getStates.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(state.loading);
        state.states = action.payload;
      })
      .addCase(getStates.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addCase(addState.pending, (state) => {
        state.loading = true;
        // console.log(state.loading);
      })
      .addCase(addState.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(state.loading);
        state.states = action.payload;
      })
      .addCase(addState.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addCase(deleteState.pending, (state) => {
        state.loading = true;
        // console.log(state.loading);
      })
      .addCase(deleteState.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(state.loading);
        state.states = action.payload;
      })
      .addCase(deleteState.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addCase(editState.pending, (state) => {
        state.loading = true;
        // console.log(state.loading);
      })
      .addCase(editState.fulfilled, (state, action) => {
        state.loading = false;
        const editedState = action.payload;
        state.states = state.states.map((currentState) =>
          currentState.id === editedState.id ? editedState : currentState
        );
      })
      .addCase(editState.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default adminSlice.reducer;
