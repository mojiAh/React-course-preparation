import React, { useState } from "react";
import ReactDOM from "react-dom";

const ENTER_SYMBOL = "⏎";
const BACKSPACE_SYMBOL = "⌫";

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  [BACKSPACE_SYMBOL, "Z", "X", "C", "V", "B", "N", "M", ENTER_SYMBOL]
];

const App = () => {
  const [value, setVaule] = useState("");
  const handleKeys = (key) => {
    if (key === ENTER_SYMBOL) {
      setVaule(value + "\n");
    } else if (key === BACKSPACE_SYMBOL) {
      setVaule(value.slice(0, -1));
    } else {
      setVaule(value + key);
    }
  };
  return (
    <div>
      <textarea value={value} />
      {rows.map((row, rowIndex) => (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "25px"
          }}
        >
          {row.map((key, keyIdx) => (
            <div
              style={{
                borderColor: "black",
                borderWidth: "0.5px",
                borderStyle: "solid",
                width: "20px"
              }}
              onClick={() => handleKeys(key)}
            >
              {key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
