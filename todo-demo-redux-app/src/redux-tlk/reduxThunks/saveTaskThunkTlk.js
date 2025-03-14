import { createAsyncThunk } from "@reduxjs/toolkit";
import * as taskApi from "../../api/taskApi";

export const saveTaskThunkTlk = createAsyncThunk(
  "/task/create",
  async (newTask, thunkAPI) => {
    const response = await taskApi.saveTask(newTask);
    console.log("What is it?:", thunkAPI);
    console.log("response:", response);
    return response;
  }
);
