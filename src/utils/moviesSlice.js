import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies: null,
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { addTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
