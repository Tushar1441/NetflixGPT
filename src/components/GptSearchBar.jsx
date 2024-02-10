import { useRef } from "react";
import { useDispatch } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";
import { addMovieMatchResult } from "../utils/movieMatchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=true&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleAiSearchBtnClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 8 movies with comma seperation. Don't give any text beside the objects.Output Eg. -> movieA, movieB, movieC, movieD, movieE";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      console.log("error 404");
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // For each movie I will search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbAllResults = await Promise.all(promiseArray);

    let tmdbResults = [];
    tmdbAllResults.map((arr) => tmdbResults.push(arr[0]));

    dispatch(
      addMovieMatchResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <>
      <h1 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-3xl font-bold mb-8 max-sm:mb-3">Find Your Perfect Match</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/6 max-sm:w-full flex justify-center"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What Would you like to Watch?"
          className="w-4/6  h-12 px-4 rounded outline-none text-black"
        ></input>
        <button
          onClick={handleAiSearchBtnClick}
          className="w-1/6 bg-red-600 font-bold text-lg rounded border-l border-black "
        >
          Search
        </button>
      </form>
    </>
  );
};

export default GptSearchBar;
