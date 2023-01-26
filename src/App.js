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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          name="textbody"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit font-bold bg-red">Submit</button>
      </form>
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div>{response}</div>
    </div>
  );
};

export default App;
