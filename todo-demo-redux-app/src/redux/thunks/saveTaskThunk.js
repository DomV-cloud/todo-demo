import { createTaskSuccess, updateTaskSuccess } from "../actions/taskAction";
import * as taskApi from "../../api/taskApi";

export function saveTaskThunk(task) {
  return async function (dispatch) {
    try {
      const createdTask = await taskApi.saveTask(task);
      console.log("Created task:", createdTask);
      if (task.id) {
        dispatch(updateTaskSuccess(createdTask));
      } else {
        dispatch(createTaskSuccess(createdTask));
      }
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };
}
