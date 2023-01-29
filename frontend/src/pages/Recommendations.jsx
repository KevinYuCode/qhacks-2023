import React from "react";
import "../styles/recommended.css";
function Recommendations({ suggestions, data, scrollTo, recommendedPrompt }) {
  return (
    <section
      id="Recommendations"
      className="flex flex-col justify-start items-center min-h-screen"
    >
      <h1 className="text-5xl mb-[5rem] mt-[6rem]">Recommendations:</h1>
      <div className="recommendations-content flex flex-wrap justify-center items-center content-center gap-[2rem]">
        {suggestions?.map((suggestion, key) => (
          <button
            key={key}
            className="recommended-topics rounded-[.8rem] min-h-[200px] max-w-[700px] min-w-[300px]"
            onClick={() => {
              scrollTo("Response");
              recommendedPrompt(suggestion.title, suggestion.description);
            }}
          >
            <h1 className="text-black p-[2rem] text-4xl">{suggestion.title}</h1>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
