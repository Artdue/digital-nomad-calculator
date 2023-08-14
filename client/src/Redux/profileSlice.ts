import { createSlice } from '@reduxjs/toolkit';
import type { IprofileType } from './store.types';
import { profileGet, profilePut } from './thunks/profileThunk';

const initialState: IprofileType = {
  profile: [],
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(profileGet.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(profileGet.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(profilePut.pending, (state, action) => {
        console.log('action===========>', action);
        state.profile = action.payload;
        state.loading = true;
      })
      .addCase(profilePut.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addDefaultCase(() => {});
  },
});

export default profileSlice.reducer;
