import React, { useState } from "react";
import './App.css';
import Spinner from "./Spinner";

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await fetch("http://localhost:8080/openai", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setLoader(false);
      setResponse(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container m-auto tracking-wide">
      <div className="bg-green-500 text-4xl p-5 text-center text-white rounded-lg mt-3">Ask Jordan Peterson!</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 pt-10">
        <textarea
          value={text}
          placeholder="Hello! I am jordan peterson! How can I help you?"
          name="textbody"
          className="border-2 w-10/12 h-96 border-zinc-400 m-auto p-4"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className=" tracking-wide text-3xl hover:bg-gray-600 w-2/12 m-auto mt-2 p-4 border bg-green-500 text-white rounded-lg">Submit</button>
      </form>
      { isLoading ? <Spinner className="" /> : <div className="tracking-wider w-10/12 m-auto mt-4">{response} </div>}


      
    </div>
  );
};

export default App;
