import "../styles/home.css";
import { motion } from "framer-motion";

function Home({ prompt, setPrompt, fetchData }) {
  return (
    <section className="home grid grid-cols-1  min-h-screen">
      <h1 className="text-5xl self-center font-normal text-[#616161] text-center">
        BuddyHack
      </h1>

      <div className="home-content mt-[3rem] flex items-center flex-col min-h-full min-w-full content-around">
        <h2
          className="header-tag 
        text-center text-5xl font-normal w-[100%]"
        >
          Discover new ways to be more productive <br /> and improve mental
          health all in <br /> one spot.
        </h2>

        <div className="home-actions flex flex-col items-center w-[80%] mt-[3rem]">
          <input
            type="text"
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            placeholder="Search your topic here."
            className="home-prompt text-center text-3xl w-[100%] max-w-[1300px] m-auto py-3"
          />
          <motion.button
            whileHover={{ scale: 0.97 }}
            className="home-search bg-[#1D2132] w-[300px] text-white mt-[3rem] py-[1rem] text-3xl rounded-[1rem]"
            onClick={() => {
              fetchData(prompt);
            }}
          >
            Search
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default Home;
