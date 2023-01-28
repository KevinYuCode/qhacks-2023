import React from "react";
import "../styles/recommended.css";
function Recommendations() {
  return (
    <section className="flex flex-col justify-start items-center min-h-screen">
      <h1 className="text-5xl mb-[5rem] mt-[6rem]">Recommendations:</h1>
      <div className="recommendations-content flex flex-wrap justify-center items-center content-center gap-[2rem]">
        {[1, 2, 3, 4].map(() => (
          <button className="recommended-topics  rounded-[.8rem] min-h-[200px] min-w-[300px]">
            <h1 className="text-black p-[2rem] text-4xl">Sleep</h1>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
