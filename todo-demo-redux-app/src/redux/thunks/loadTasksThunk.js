import { loadTasksSuccess } from "../actions/taskAction";
import * as taskApi from "../../api/taskApi";

export function loadTasksThunk() {
  return async function (dispatch) {
    try {
      const tasks = await taskApi.getTasks();
      dispatch(loadTasksSuccess(tasks));
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };
}
