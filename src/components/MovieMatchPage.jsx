import { BODY_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header";

const MovieMatchPage = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-[2160px] relative">
        <img
          src={BODY_IMG}
          alt="body-img"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute inset-0 pt-44 max-sm:pt-24 text-white flex flex-col items-center">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default MovieMatchPage;
