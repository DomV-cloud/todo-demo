import * as taskApi from "../../api/taskApi";
import { deleteTaskSuccess } from "../actions/taskAction";

export function deleteTaskThunk(taskId) {
  return async function (dispatch) {
    if (!taskId) {
      console.error("Task ID is undefined or null in thunk!");
      return;
    }
    if (typeof taskId === "string") {
      alert("je string");
    }
    try {
      await taskApi.deleteTask(taskId);
      dispatch(deleteTaskSuccess(taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
}
