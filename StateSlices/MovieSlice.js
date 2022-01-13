import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  MovieArr: {},
};
export const MovieSlice = createSlice({
  name: "MovieAreaValues",
  initialState,
  reducers: {
    getMovieData: (state, action) => {
      state.MovieArr = action.payload;
    },
  },
});
export const MovieSliceData = (state) => state.MovieAreaValues;
export const { getMovieData } = MovieSlice.actions;
export default MovieSlice.reducer;
