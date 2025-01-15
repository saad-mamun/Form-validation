import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    console.log(username);
    setUsername("");
  };

  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={(e) => submitHandeler(e)} className="space-y-3">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 focus:outline-none ring-2 rounded-lg"
        />{" "}
        <br />
        <button className="px-4 py-2 ring-2 rounded-lg bg-green-600 text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
