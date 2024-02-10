import { createSlice } from "@reduxjs/toolkit";

const movieMatchSlice = createSlice({
  name: "movieMatch",
  initialState: {
    gptToggle: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    btnToggle: (state) => {
      state.gptToggle = !state.gptToggle;
    },
    addMovieMatchResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { btnToggle, addMovieMatchResult } = movieMatchSlice.actions;
export default movieMatchSlice.reducer;
