import useTopRatedMovies from "../hooks/useTopRatedMovies";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <HeroSection />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
