import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-8">
      <h1 className="text-lg md: text-4xl pb-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-10 pb-16">
          {movies?.map((movie, index) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
