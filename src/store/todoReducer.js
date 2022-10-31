const ADD_TODO = "todo/add";
const REMOVE_TODO = "todo/remove";

const initialState = {
  tasks: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
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
