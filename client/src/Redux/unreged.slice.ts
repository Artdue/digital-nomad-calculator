import { createSlice } from '@reduxjs/toolkit';
import { unregtUserGet } from './thunks/unregThunk';

const initialState = {
  income: 0,
  employmentDate: '',
  citizenship: '',
  visaT: '',
  visaS: '',
};

const unregSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(unregtUserGet.pending, () => {
        console.log('pending');
      })
      .addCase(unregtUserGet.fulfilled, (state, action) => {
        state.income = action.payload.income;
        state.employmentDate = action.payload.employmentDate;
        state.citizenship = action.payload.citizenship;
        state.visaT = action.payload.visaT;
        state.visaS = action.payload.visaS;
      })
      .addCase(unregtUserGet.rejected, () => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default unregSlice.reducer;
