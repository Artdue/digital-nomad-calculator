import { configureStore } from '@reduxjs/toolkit';
import userSlice from './tasks.slice';

const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;
