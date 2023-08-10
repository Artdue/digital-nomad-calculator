import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';
import adminSlice from './admin.slice';
import stateSlice from './state.slice';
import profileSlice from './profileSlice';

const store = configureStore({
  reducer: {
    adminSlice,
    userSlice,
    stateSlice,
    profileSlice,
  },
});

export default store;
