import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';
import adminSlice from './admin.slice';
import stateSlice from './state.slice';
import profileSlice from './profileSlice';
import adminUserSlice from './adminuser.slice';
import nodeSlice from './node.slice';

const store = configureStore({
  reducer: {
    adminSlice,
    userSlice,
    stateSlice,
    profileSlice,
    adminUserSlice,
    nodeSlice,
  },
});

export default store;
