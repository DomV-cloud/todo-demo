import initialState from "./initialiState";
import * as types from "../actions/actionTypes";

// Reducer returns state via switch command
export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.CREATE_TASK_SUCCESS:
      return [...state, { ...action.task }]; // immutable -> ...
    case types.DELETE_TASK_SUCCESS:
      return state.filter(task => task.id !== action.taskId);
    default:
      return state;
  }
}
