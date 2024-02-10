import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingNowMovies from "../hooks/useTrendingNowMovies";
import { useSelector } from "react-redux";
import MovieMatchPage from "./MovieMatchPage";

const Browse = () => {
  const gptToggle = useSelector((store) => store.movieMatch?.gptToggle);

  useTopRatedMovies();
  usePopularMovies();
  useNowPlayingMovies();
  useTrendingNowMovies();

  return (
    <div className="overflow-hidden bg-black">
      <Header />

      {gptToggle ? (
        <MovieMatchPage />
      ) : (
        <>
          <HeroSection />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
