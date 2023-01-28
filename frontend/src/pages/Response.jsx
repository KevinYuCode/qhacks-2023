import React from "react";
import Down_Arrow from "../assets/DownArrowLight.png";
import "../styles/response.css";
function Response() {
  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen mt-[8rem]">
      <div className="response-content rounded-[1rem] pt-[3rem] pb-[5rem] px-[6rem] mt-[5rem] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">"Productivity"</h1>
        <p className="response-text w-[100%] max-w-[1200px] mt-[3rem] text-2xl text-center leading-10 max-h-[600px] overflow-scroll">
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className=" flex flex-col items-center response-discover-more absolute bottom-[2%] text-2xl font-thin">
        <button className="">Discover More</button>
        <img src={Down_Arrow} className="mt-[.5rem] w-[40px]" alt="" />
      </div>
    </section>
  );
}

export default Response;
