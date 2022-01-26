import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [filter, setFilter] = useState("");
  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };
  const removeItem = (item) => {
    setItems(items.filter((i) => i !== item));
  };
  const filteredItems = items.filter((item) => item.match(filter));

  const VisibleItems = filteredItems.map((i, index) => (
    <li key={index} onClick={() => removeItem(i)}>
      {i}
    </li>
  ));
  return (
    <Grid>
      <Row>
        <Col>Hello</Col>
      </Row>
      <Row>
        <input
          type="text"
          placeholder={"Filter the tasks"}
          value={filter}
          onChange={(e) => {
            e.preventDefault();
            setFilter(e.target.value);
          }}
        />
      </Row>
      <Row>
        <input
          type="text"
          value={newItem}
          onChange={(e) => {
            e.preventDefault();
            setNewItem(e.target.value);
          }}
        />
        <button onClick={addNewItem}>Add</button>
      </Row>
      <Row>
        <ul>{VisibleItems}</ul>
      </Row>
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
