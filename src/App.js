import React, { useState } from "react";
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/openai", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      alert("something went wrong.");
      console.log(err);
    }
  };

  return (
    <div className="container m-auto">
      <div className="bg-green-500 font-bold text-4xl p-5 text-center text-white">Ask Jordan Peterson Question</div>
      <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 pt-10">
        <textarea
          value={text}
          placeholder="Hello! I am jordan peterson! How can I help you?"
          name="textbody"
          className="border-2 w-10/12 h-96 border-zinc-400 font-semibold m-auto"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="font-extrabold text-3xl hover:bg-gray-600 w-2/12 m-auto mt-2 p-4 border bg-green-500 text-white rounded-lg">Submit</button>
      </form>
      {/* <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div> */}
      <div className="font-bold w-10/12 m-auto mt-4"><span className="text-3xl font-bold">Jordan: </span>{response} </div>
    </div>
  );
};

export default App;
