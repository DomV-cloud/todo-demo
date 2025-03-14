import { createAsyncThunk } from "@reduxjs/toolkit";
import * as taskApi from "../../api/taskApi";

export const deleteTaskThunkTlk = createAsyncThunk(
  "/task/delete",
  async taskId => {
    await taskApi.deleteTask(taskId);
    return taskId;
  }
);
