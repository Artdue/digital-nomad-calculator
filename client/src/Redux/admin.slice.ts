import { createSlice } from '@reduxjs/toolkit';
import type { IstateType } from './store.types';
import { getAdmin } from './thunks/getAdmin';
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
      .addCase(getAdmin.pending, (state) => {
        state.loading = true;
        // console.log(state.loading);
      })
      .addCase(getAdmin.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(state.loading);
        state.states = action.payload;
      })
      .addCase(getAdmin.rejected, (state) => {
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
        // const editedState = action.payload;
        // state.states = state.states.map((currentState) =>
        //   currentState.id === editedState.id ? editedState : currentState,
        // );
        //* колхоз, но работает
        state.states = action.payload;
      })
      .addCase(editState.rejected, (state) => {
        state.loading = false;
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});

export default adminSlice.reducer;
