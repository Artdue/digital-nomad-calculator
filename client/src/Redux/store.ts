import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';
import adminSlice from './admin.slice';
import stateSlice from './state.slice';
import profileSlice from './profileSlice';
import adminUserSlice  from "./adminuser.slice";

const store = configureStore({
  reducer: {
    adminSlice,
    userSlice,
    stateSlice,
    profileSlice,
    adminUserSlice,
  },
});

export default store;
