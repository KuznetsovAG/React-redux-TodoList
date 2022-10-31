import React from "react";

const TodoInput = ({ state, handleChange, addTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        value={state}
        type="text"
        onChange={handleChange}
        placeholder="Введите значение..."
      />
      <button type="button" className="add-button" onClick={addTodo}>
        Сохранить
      </button>
    </div>
  );
};

export default TodoInput;
