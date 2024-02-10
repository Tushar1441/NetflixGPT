import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  const gptToggle = useSelector((store) => store.movieMatch?.gptToggle);

  if (!posterPath) return null;
  return (
    <div className="flex flex-col w-48">
      <div className="w-48 cursor-pointer border border-white ">
        <img
          className="h-full"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
        />
      </div>
      {gptToggle && (
        <h1 className="bg-black text-xl font-semibold p-2">{title}</h1>
      )}
    </div>
  );
};

export default MovieCard;

/***
 * transition-all duration-300 hover:scale-105 hover:border-none
 */
