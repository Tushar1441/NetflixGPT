import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" mt-0 2xl:-mt-[240px]  pl-4 relative z-20">
      <MoviesList title={"Popular Movies"} movies={movies.popularMovies} />

      <MoviesList
        title={"Trending Now Movies"}
        movies={movies.trendingNowMovies}
      />
      <MoviesList
        title={"Now Playing Movies"}
        movies={movies.nowPlayingMovies}
      />
      <MoviesList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MoviesList
        title={"Physcological Thriller Movies"}
        movies={movies.topRatedMovies}
      />
      <MoviesList
        title={"Cult Classic Movies"}
        movies={movies.topRatedMovies}
      />
      <MoviesList title={"Feel Good Movies"} movies={movies.topRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;
