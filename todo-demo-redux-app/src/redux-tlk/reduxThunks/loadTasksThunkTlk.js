import { createAsyncThunk } from "@reduxjs/toolkit";
import * as taskApi from "../../api/taskApi";

export const loadTasksThunkTlk = createAsyncThunk(
  "tasks/loadTasks",
  async newTask => {
    const response = await taskApi.getTasks(newTask);

    return response;
  }
);
