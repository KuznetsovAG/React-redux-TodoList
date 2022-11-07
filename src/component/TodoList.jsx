import React from "react";

const TodoList = ({ todos, handleDelete, toggleTodoCompleted }) => {
  return (
    <div className="container">
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <div key={todo.id} className="todo">
              <button
                onClick={() => toggleTodoCompleted(todo.id)}
                className={todo.complete === false ? "down" : "up"}
              >
                Todo
              </button>
              <li>{todo.taskValue}</li>
              <button
                className="delete-button"
                onClick={() => handleDelete(todo)}
              >
                Удалить
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No todos</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
