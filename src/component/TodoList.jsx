import React, { useState } from "react";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <div key={todo.id} className="todo">
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
