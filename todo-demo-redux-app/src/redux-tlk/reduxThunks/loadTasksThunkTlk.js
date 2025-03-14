import { createAsyncThunk } from "@reduxjs/toolkit";
import * as taskApi from "../../api/taskApi";

export const loadTasksThunkTlk = createAsyncThunk(
  "tasks/loadTasks",
  async (newTask, thunkAPI) => {
    const response = await taskApi.getTasks(newTask);
    console.log("What is it?:", thunkAPI);

    return response;
  }
);
