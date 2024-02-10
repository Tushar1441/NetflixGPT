import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingNowMovies } from "../utils/moviesSlice";

const useTrendingNowMovies = () => {
  const dispatch = useDispatch();

  // Fetch Data from TMDB API and update the Store
  const getTrendingNowMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTrendingNowMovies(json.results));
  };

  useEffect(() => {
    getTrendingNowMovies();
  }, []);
};

export default useTrendingNowMovies;
