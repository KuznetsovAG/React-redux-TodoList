const ADD_TODO = "todo/add";
const REMOVE_TODO = "todo/remove";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return [...state.filter((char) => char !== action.payload)];
    default:
      return state;
  }
};

export const addTodos = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodos = (payload) => {
  return { type: REMOVE_TODO, payload };
};
