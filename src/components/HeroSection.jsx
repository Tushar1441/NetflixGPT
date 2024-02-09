import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const HeroSection = () => {
  const movies = useSelector((store) => store.movies?.topRatedMovies);
  if (!movies) return;

  const topMovie = movies[0];
  const { original_title, overview, id } = topMovie;

  return (
    <div className="bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};

export default HeroSection;
