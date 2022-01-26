
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-flexbox-grid";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("");
  const addNewItem = () => {
    setTodos([
      ...todos,
      { description: newTodo, completed: false, createdAt: Date.now() }
    ]);
    setNewTodo("");
  };
  const removeItem = (itemDsc) => {
    setTodos(
      todos.map((i) =>
        i.description === itemDsc
          ? {
              ...i,
              completed: !i.completed
            }
          : i
      )
    );
  };
  const filteredItems = todos.filter((item) => item.description.match(filter));

  const VisibleItems = filteredItems.map((i, index) => (
    <li
      key={index}
      onClick={() => removeItem(i.description)}
      style={i.completed ? { textDecorationLine: "line-through" } : null}
    >
      {i.description}
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
          value={newTodo}
          onChange={(e) => {
            e.preventDefault();
            setNewTodo(e.target.value);
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
