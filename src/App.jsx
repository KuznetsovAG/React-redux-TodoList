import "./index.css";
import React, { useState } from "react";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import Footer from "./component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "./store/todoReducer";
function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);
  const handleChange = (e) => {
    e.preventDefault();

    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const addTodo = () => {
    if (inputValue !== "") {
      const newTask = {
        id: Date.now(),
        taskValue: inputValue,
        complete: false,
      };

      dispatch(addTodos(newTask));
      setInputValue("");
    }
  };

  const handleDelete = (text) => {
    dispatch(removeTodos(text));
  };

  return (
    <div className="App">
      <h1>React-redux todo App</h1>
      <TodoInput
        state={inputValue}
        handleChange={handleChange}
        addTodo={addTodo}
      />
      <TodoList todos={todos} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}
export default App;
