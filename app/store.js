import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../StateSlices/authSlice";
import movieSlice from "../StateSlices/MovieSlice";
export const store = configureStore({
  reducer: {
    AuthValues: authSlice,
    MovieAreaValues: movieSlice,
  },
});
