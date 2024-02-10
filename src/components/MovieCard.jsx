import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, index }) => {
  if (!posterPath) return null;
  return (
    <figure className="relative overflow-hidden w-48 transition-all duration-300 cursor-pointer border border-white hover:scale-105">
      <a href="#">
        <img className="" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
        <div className="absolute bg-black inset-0 opacity-20"></div>
      </a>
      <figcaption className="absolute left-[-6px] bottom-[-48px] text-[144px] font-bold text-white">
        <p>{index + 1}</p>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
