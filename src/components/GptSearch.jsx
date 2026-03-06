import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          className="h-screen object-cover"
          // src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          // alt="logo"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_large.jpg"
          alt="logo"
        />
      </div>

      <div className="pt-[30%] md: p-0">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
