import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Response from "./pages/Response";
import Recommendations from "./pages/Recommendations";
import SearchIcon from "./components/SearchIcon";

function App() {
  const [prompt, setPrompt] = useState(null);
  const [data, setData] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  // http://127.0.0.1:5000/suggestions
  const fetchData = (prompt) => {
    console.log(prompt);

    // Get Response for prompt
    fetch("http://127.0.0.1:5000/response", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("FIRST CALL");
        console.log(data);
        console.log(data.response[0]);
        setData(data.response);
      });

    // Getting more suggestions
    fetch("http://127.0.0.1:5000/suggestions", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("SECOND CALL");

        console.log(data);
        console.log(data.response);
        setSuggestions(data.response);
      });
  };
  return (
    <div className="App bg-[#F1F1F1] min-h-screen">
      <Home prompt={prompt} setPrompt={setPrompt} fetchData={fetchData} />
      <Response prompt={prompt} data={data} />
      <Recommendations data={data} />
      <SearchIcon />
    </div>
  );
}

export default App;
