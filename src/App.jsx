import "./index.css";
import React, { useState } from "react";
import TodoList from "./component/TodoList";
import TodoInput from "./component/TodoInput";
import Footer from "./component/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodos,
  allTodos,
  doneTodo,
  inactiveTodos,
  removeTodos,
  toggleComplete,
} from "./store/todoReducer";
function App() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.tasks);
  const filterTask = useSelector((state) => state.visible);
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

  const toggleTodoCompleted = (char) => {
    dispatch(toggleComplete(char));
  };

  const handleDelete = (text) => {
    dispatch(removeTodos(text));
  };

  const filterDoneTodo = (charComplete) => {
    dispatch(doneTodo(charComplete));
  };

  const filterAllTodo = (params) => {
    dispatch(allTodos(params));
  };

  const filterInactiveTodo = (params) => {
    dispatch(inactiveTodos(params));
  };

  const currentTodos = (param) => {
    if (param === "all") {
      return todos;
    } else if (param === "active") {
      const done = todos.filter((todo) => todo.complete === false);
      return done;
    } else if (param === "inactive") {
      const inactive = todos.filter((todo) => todo.complete === true);
      return inactive;
    }
  };
  return (
    <div className="App">
      <h1>React-redux todo App</h1>
      <TodoInput
        state={inputValue}
        handleChange={handleChange}
        addTodo={addTodo}
      />
      <TodoList
        todos={currentTodos(filterTask)}
        handleDelete={handleDelete}
        toggleTodoCompleted={toggleTodoCompleted}
      />

      <Footer
        filterDoneTodo={filterDoneTodo}
        all={filterAllTodo}
        inactive={filterInactiveTodo}
      />
    </div>
  );
}
export default App;
