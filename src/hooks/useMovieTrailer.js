import { addTrailerVideo } from "../utils/movieSlice";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch my trailer to make api cal to make that i need id
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer)); //dispatch an action
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
