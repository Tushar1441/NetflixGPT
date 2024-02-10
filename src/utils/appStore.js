import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import gptReducer from "./movieMatchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvSeries: tvSeriesReducer,
    movieMatch: gptReducer,
  },
});

export default appStore;
