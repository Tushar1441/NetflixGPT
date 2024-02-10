import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies: null,
    nowPlayingMovies: null,
    popularMovies: null,
    trendingNowMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addTrendingNowMovies: (state, action) => {
      state.trendingNowMovies = action.payload;
    },
  },
});

export const {
  addTopRatedMovies,
  addMovieTrailer,
  addNowPlayingMovies,
  addPopularMovies,
  addTrendingNowMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
