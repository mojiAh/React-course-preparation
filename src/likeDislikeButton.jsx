import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [like, setLike] = useState(25);
  const [dislike, setDislike] = useState(5);
  return (
    <div
      style={{
        width: "150px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <button
        onClick={() => setLike(like + 1)}
        style={{ backgroundColor: "green" }}
      >
        Like
        <span>{like}</span>
      </button>
      <button
        onClick={() => setDislike(dislike + 1)}
        style={{ backgroundColor: "red" }}
      >
        dislike
        <span>{dislike}</span>
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
