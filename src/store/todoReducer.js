const ADD_TODO = "todo/add";
const REMOVE_TODO = "todo/remove";
const TOGGLE_COMPLETE = "todo/complete";
const FILTER_DONE_TODO = "todo/done";
const ALL_TODOS = "todo/all";
const FILTERED_INACTIVE_TODO = "todo/inactive";

const initialState = {
  tasks: [],
  visible: "all",
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
    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id === action.payload) {
              task.complete = !task.complete;
              return task;
            } else {
              return task;
            }
          }),
        ],
      };
    case FILTER_DONE_TODO:
      return {
        ...state,
        visible: action.payload,
      };
    case ALL_TODOS:
      return {
        ...state,
        visible: action.payload,
      };

    case FILTERED_INACTIVE_TODO:
      return {
        ...state,
        visible: action.payload,
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

export const toggleComplete = (payload) => {
  return { type: TOGGLE_COMPLETE, payload };
};

export const doneTodo = (payload) => {
  return { type: FILTER_DONE_TODO, payload };
};

export const allTodos = (payload) => {
  return { type: ALL_TODOS, payload };
};

export const inactiveTodos = (payload) => {
  return { type: FILTERED_INACTIVE_TODO, payload };
};
