import "./index.css";
import React, { useState } from "react";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "./store/todoReducer";
function App() {
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const handleChange = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const addTodo = () => {
    if (state !== "") {
      dispatch(addTodos(state));
      setState("");
    }
  };

  const handleDelete = (text) => {
    dispatch(removeTodos(text));
    console.log(text);
  };

  return (
    <div className="App">
      <h1>React-redux todo App</h1>
      <TodoInput state={state} handleChange={handleChange} addTodo={addTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
