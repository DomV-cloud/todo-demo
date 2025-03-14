import { createAsyncThunk } from "@reduxjs/toolkit";
import * as taskApi from "../../api/taskApi";

export const saveTaskThunkTlk = createAsyncThunk(
  "/task/create",
  async newTask => {
    const response = await taskApi.saveTask(newTask);
    console.log("response:", response);
    return response;
  }
);
