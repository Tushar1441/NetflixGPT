import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTopRatedMovies();
  usePopularMovies();
  useNowPlayingMovies();

  return (
    <div className="overflow-hidden bg-black">
      <Header />
      <HeroSection />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
