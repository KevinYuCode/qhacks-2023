import React from "react";
import Down_Arrow from "../assets/DownArrowLight.png";
import "../styles/response.css";
function Response({ prompt, data }) {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen mt-[8rem]">
      <div className="min-h-[400px] min-w-[1300px] response-content rounded-[1rem] pt-[3rem] pb-[3rem] px-[6rem] mt-[5rem] flex flex-col items-start justify-center">
        {prompt ? (
          <h1 className="text-5xl mb-[3rem] font-medium ">"{prompt}"</h1>
        ) : (
          <div>oof</div>
        )}
        {data?.map((suggestion, key) => (
          <p
            key={key}
            className="response-text w-[100%] max-w-[1200px] mt-[0rem] text-2xl text-left leading-10 max-h-[600px] overflow-scroll"
          >
            {suggestion}
          </p>
        ))}
      </div>
      <div className=" flex flex-col items-center response-discover-more absolute bottom-[2%] text-2xl font-thin">
        <button className="">Discover More</button>
        <img src={Down_Arrow} className="mt-[.5rem] w-[40px]" alt="" />
      </div>
    </section>
  );
}

export default Response;
