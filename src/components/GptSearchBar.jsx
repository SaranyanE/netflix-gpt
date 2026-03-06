import React, { useRef } from "react";
import language from "../utils/languageConstants";
import groq from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  //for each movie i am searching in tmdb api
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    if (!query) return;

    // GPT prompt
    const gptQuery = `Act as a Movie Recommendation system and suggest 5 movies for the query: ${query}. 
Only return movie names separated by commas like this example:
Sholay, Don, Golmaal, Gadar, Koi Mil Gaya`;

    try {
      const gptResults = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: gptQuery }],
      });

      const gptMovies = gptResults?.choices?.[0]?.message?.content?.split(",");

      console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //array of promises ...[promise,promise....promise]

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);

      dispatch(
        addGptMovieResult({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error("GPT Error:", error);
    }

    //takes arr of promises //only when every promises is resolved it waits
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 text-white"
          placeholder={language.en.gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {language.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
