import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Response from "./pages/Response";
import Recommendations from "./pages/Recommendations";
import SearchIcon from "./components/SearchIcon";

function App() {
  const [prompt, setPrompt] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = (prompt) => {
    fetch("localhost:5001", prompt)
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    console.log(prompt);
  }, [prompt]);
  return (
    <div className="App bg-[#F1F1F1] min-h-screen">
      <Home setPrompt={setPrompt} />
      <Response data={data} />
      <Recommendations data={data} />
      <SearchIcon />
    </div>
  );
}

export default App;
