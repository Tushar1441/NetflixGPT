import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store.movies?.movieTrailer);
  if (!trailer) return;

  const { key } = trailer;

  return (
    <div className="">
      <iframe
        className="w-screen h-screen aspect-video"
        src={"https://www.youtube.com/embed/" + key + "/&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
