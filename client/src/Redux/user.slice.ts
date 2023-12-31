import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import navApi from './thunks/user/nav.api';
import userRegister from './thunks/user/reg.api';
import userLogin from './thunks/user/log.api';
import userLogout from './thunks/user/logout.api';

import logAdmin from './thunks/logAdmin';
import type { IInitialState } from './store.types';

const initialState: IInitialState = {
  email: '',
  admin: false,
  auth: false,
  msg: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, () => {})

      .addCase(userLogin.fulfilled, (state, action: PayloadAction<IInitialState>) => {
        if (action.payload) {
          state.email = action.payload.email;
          state.admin = action.payload.admin;
          state.msg = action.payload.msg;
          state.auth = false;
        }
      })
      .addCase(userLogin.rejected, () => {
        console.log('ERROR!');
      })
      .addCase(userRegister.pending, () => {})
      .addCase(userRegister.fulfilled, (state, action: PayloadAction<IInitialState>) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = true;
      })
      .addCase(userRegister.rejected, () => {
        console.log('ERROR!');
      })
      .addCase(userLogout.pending, () => {})
      .addCase(userLogout.fulfilled, (state) => {
        Object.assign(state, initialState);
      })
      .addCase(userLogout.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(navApi.pending, () => {})
      .addCase(navApi.fulfilled, (state, action: PayloadAction<IInitialState>) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.auth = true;
      })
      .addCase(navApi.rejected, () => {
        console.error('ERROR!');
      })
      .addCase(logAdmin.pending, () => {})
      .addCase(logAdmin.fulfilled, (state, action: PayloadAction<IInitialState>) => {
        state.email = action.payload.email;
        state.admin = action.payload.admin;
        state.msg = action.payload.msg;
        state.auth = false;
      })
      .addCase(logAdmin.rejected, () => {
        console.error('ERROR!');
      })
      .addDefaultCase(() => {});
  },
});
export default userSlice.reducer;
