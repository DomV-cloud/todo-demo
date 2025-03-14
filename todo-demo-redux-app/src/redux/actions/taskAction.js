import * as types from "../actions/actionTypes";

export function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function createTaskSuccess(task) {
  return { type: types.CREATE_TASK_SUCCESS, task };
}

export function updateTaskSuccess(task) {
  return { type: types.UPDATE_COURSE_SUCCESS, task };
}

export function deleteTaskSuccess(taskId) {
  return { type: types.DELETE_TASK_SUCCESS, taskId };
}
