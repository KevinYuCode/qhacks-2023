import React from "react";
import Down_Arrow from "../assets/DownArrowLight.png";
import "../styles/response.css";
import { motion } from "framer-motion";

function Response({ prompt, data, scrollTo }) {
  return (
    <section
      id="Response"
      className="relative flex flex-col items-center justify-start min-h-screen mt-[8rem]"
    >
      <div className="max-h-[500px] max-min-h-[500px] min-w-[1300px] response-content rounded-[1rem] pt-[3rem] pb-[3rem] px-[6rem] mt-[5rem] flex flex-col items-start justify-center">
        {prompt ? (
          <h1 className="text-5xl mb-[3rem] font-medium ">"{prompt}"</h1>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col w-[100%] max-w-[1200px] mt-[.5rem] max-h-[350px] overflow-scroll">
          {data?.map((suggestion, key) => (
            <div key={key} className="flex gap-4">
              <p className="text-2xl text-left leading-9">{key + 1}.</p>
              <p
                key={key}
                className="response-text text-2xl text-left leading-9"
              >
                {suggestion}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col items-center response-discover-more absolute bottom-[2%] text-2xl font-thin">
        <button
          className=""
          onClick={() => {
            scrollTo("Recommendations");
          }}
        >
          Discover More
        </button>
        <motion.img
          animate={{ y: [0, 5, 0] }}
          transition={{
            delay: 0,
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          src={Down_Arrow}
          className="mt-[.5rem] w-[40px]"
          alt=""
        />
      </div>
    </section>
  );
}

export default Response;
