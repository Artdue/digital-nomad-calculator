import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user.slice';
import adminSlice from './admin.slice';
import stateSlice from './state.slice';


const store = configureStore({
  reducer: {
    adminSlice,
    userSlice,
      stateSlice,
  },
});

export default store;
