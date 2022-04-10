import { configureStore } from '@reduxjs/toolkit';
import moviesData from './Slice/MovieSlice'
import currentUser from './Slice/UserSlice'

export const store = configureStore({
  reducer: {
    moviesData,
    currentUser
  },
  devTools: process.env.NODE_ENV !== 'production'
});
