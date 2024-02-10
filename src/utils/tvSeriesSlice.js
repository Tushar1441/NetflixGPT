import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    airingTodaySeries: null,
    onTheAirSeries: null,
    popularSeries: null,
    topRatedSeries: null,
    seriesTrailer: null,
  },
  reducers: {
    addAiringTodaySeries: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addOnTheAirSeries: (state, action) => {
      state.nowPlayingMoviesMovies = action.payload;
    },
    addPopularSeries: (state, action) => {
      state.popularMoviesMovies = action.payload;
    },
    addTopRatedSeries: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addSeriesTrailer: (state, action) => {
      state.seriesTrailer = action.payload;
    },
  },
});

export const {
  addAiringTodaySeries,
  addOnTheAirSeries,
  addNowPlayingMovies,
  addPopularMovies,
  addSeriesTrailer
} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
