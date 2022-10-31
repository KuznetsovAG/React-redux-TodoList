import React from "react";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}>{todo}</li>
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
    </>
  );
};

export default TodoList;
