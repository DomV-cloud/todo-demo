import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../redux/reducers/initialState";
import { loadTasksThunkTlk } from "../reduxThunks/loadTasksThunkTlk";
import { saveTaskThunkTlk } from "../reduxThunks/saveTaskThunkTlk";
import { deleteTaskThunkTlk } from "../reduxThunks/deleteTaskThunkTlk";

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  // this is used only for sync communication
  reducers: {
    // only to show it
    loadTasks: (state, action) => {
      return action.tasks;
    },
    saveTask: (state, action) => {
      return state.tasks.push(action.payload);
    }
  },
  // different reducers vs extrareducers?
  // extraReducer for async communication?
  extraReducers: builder => {
    builder
      .addCase(loadTasksThunkTlk.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(saveTaskThunkTlk.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskThunkTlk.fulfilled, (state, action) => {
        state.tasks.filter(task => task.id !== action.taskId);
      });
  }
});

export default taskSlice.reducer;
