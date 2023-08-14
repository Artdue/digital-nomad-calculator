import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  const nodeSlice = createSlice({
      name:'node',
    initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(nodemailerSend .pending, (state) => {
        console.log('pending');
      })
      .addCase(nodemailerSend.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = false;
      })
      .addCase(nodemailerSend.rejected, (state) => {
        console.error('ERROR!');
      })

  .addDefaultCase(() => {});
},
});
export default nodeSlice.reducer;