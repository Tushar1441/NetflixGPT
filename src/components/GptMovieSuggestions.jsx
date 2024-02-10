import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList";

const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.movieMatch.movieResults);

  return (
    <div className="w-screen mt-12 pl-4 relative z-20">
      <MoviesList title={"Curated Films Just for You"} movies={movies} />;
    </div>
  );
};

export default GptMovieSuggestions;
