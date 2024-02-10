import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    // filter the trailer from all the videos
    const movieVideos = json.results.filter(
      (movie) => movie.type === "Trailer"
    );

    // if trailer not available then pick the first video from the list.
    const trailer = movieVideos.length ? movieVideos[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
