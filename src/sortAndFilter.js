import React, { useState } from "react";
import ReactDOM from "react-dom";

const dataTest = [
  { description: "test", createdAt: "", name: "moji" },
  { description: "yet another test", createdAt: "", name: "jay" },
  { description: "my task is done!", createdAt: "", name: "ray" },
  { description: "element are fulfilled", createdAt: "", name: "simon" },
  { description: "problem solevd", createdAt: "", name: "Tom" }
];

const App = () => {
  const sortData = (data) =>
    data.sort((a, b) => {
      const aChar = a.description.toLowerCase();
      const bChar = b.description.toLowerCase();
      if (aChar > bChar) {
        return 1;
      }
      if (aChar < bChar) {
        return -1;
      } else {
        return 0;
      }
    });
  const [data, setData] = useState(sortData(dataTest));
  const [filter, setFilter] = useState("");
  const filterData = data.filter((item) => item.description.match(filter));
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filterData.map((item, index) => (
          <li key={index}>{item.description}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
