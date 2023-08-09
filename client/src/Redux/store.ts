import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './tasks.slice';
import adminSlice from './admin.slice';

const store = configureStore({
  reducer: {
    adminSlice,
    // userSlice,
  },
});

export default store;
