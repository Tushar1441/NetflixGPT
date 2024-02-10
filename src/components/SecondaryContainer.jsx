import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" mt-0 2xl:-mt-[400px]  pl-4 md:pl-12 relative z-20">
      <MoviesList
        title={"Now Trending Movies"}
        movies={movies.nowPlayingMovies}
      />
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MoviesList
        title={"Physcological Thriller Movies"}
        movies={movies.topRatedMovies}
      />
      <MoviesList
        title={"Cult Classic Movies"}
        movies={movies.topRatedMovies}
      />
      <MoviesList title={"Scientific Exploration Movie"} movies={movies.topRatedMovies} />
      <MoviesList title={"Feel Good Movies"} movies={movies.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
