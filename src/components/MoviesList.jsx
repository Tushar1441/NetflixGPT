import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  movies?.filter((movie) => movie?.poster_path);
  return (
    movies && (
      <div className="px-8">
        <h1 className="text-lg md:text-4xl pb-2 text-white font-semibold">
          {title}
        </h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex gap-8 pb-14">
            {movies?.map((movie, index) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MoviesList;
