import { createSlice } from '@reduxjs/toolkit';
import type { IprofileType } from './store.types';
import { profileGet, profilePut } from './thunks/profileThunk';

const initialState: IprofileType = {
  profile: {
    id: 0,
    login: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    password: '',
    subscribed: false,
    birthDate: '',
    phoneNumber: '',
    passport: '',
    balance: '',
    lease: '',
    citizenship: '',
    income: 0,
    work_exp: 0,
    work_date: '',
    document_status: 'Новый пользователь',
    appStatus: false,
    admin: false,
    visaType: '',
    visaTerm: 0,
    visaShare: '',
    createdAt: {},
    updatedAt: {},
  },
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile(state): void {
      state.profile = initialState.profile;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(profileGet.pending, (state) => {
        state.loading = true;
      })
      .addCase(profileGet.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addCase(profilePut.pending, (state) => {
        state.loading = true;
      })
      .addCase(profilePut.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      })
      .addDefaultCase(() => {});
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
