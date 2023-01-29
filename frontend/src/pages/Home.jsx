import "../styles/home.css";
import { motion } from "framer-motion";

function Home({
  prompt,
  setPrompt,
  fetchData,
  data,
  lazySuggestions,
  suggestions,
}) {
  return (
    <section id="Home" className="home grid grid-cols-1  min-h-screen">
      <h1 className="text-5xl self-center font-normal text-[#616161] text-center">
        BuddyHack
      </h1>

      <div className="home-content pt-[3rem] flex items-center flex-col min-h-full min-w-full content-around">
        <h2
          className="header-tag 
        text-center text-5xl font-normal w-[100%]"
        >
          Discover new ways to be more productive <br /> and improve mental
          health all in <br /> one spot.
        </h2>

        {lazySuggestions == null ? (
          <div className="home-actions flex flex-col items-center w-[80%] mt-[3rem]">
            <motion.input
              type="text"
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              placeholder="Search your topic here."
              className="home-prompt text-center text-3xl w-[100%] max-w-[1300px] m-auto py-3"
            />
            <motion.button
              whileHover={{
                backgroundColor: "#f1f1f12",
                color: "#1d2132",
                border: "2px solid #1d2132",
              }}
              initial={{ border: "2px solid #1d2132" }}
              className="home-search bg-[#1D2132] w-[300px] text-white mt-[3rem] py-[1rem] text-3xl rounded-[1rem]"
              onClick={() => {
                fetchData(prompt);
              }}
            >
              Search
            </motion.button>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-[5rem]">
            <motion.h1
              className="text-3xl font-light mb-[3rem]"
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {lazySuggestions}
            </motion.h1>
            <motion.div className="dot-container flex gap-[1rem]">
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                className="dot w-[20px] h-[20px] bg-[black] rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
                className="dot w-[20px] h-[20px] bg-[black] rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className="dot w-[20px] h-[20px] bg-[black] rounded-full"
              ></motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
