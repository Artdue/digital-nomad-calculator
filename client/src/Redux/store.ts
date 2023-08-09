import { configureStore } from '@reduxjs/toolkit';
// import userSlice from './user.slice';
import stateSlice from './state.slice';

const store = configureStore({
  reducer: {
    // userSlice,
    stateSlice,
  },
});

export default store;
