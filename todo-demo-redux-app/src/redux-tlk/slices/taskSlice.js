import { createSlice } from "@reduxjs/toolkit";
import initialState from "../../redux/reducers/initialState";
import { loadTasksThunkTlk } from "../reduxThunks/loadTasksThunkTlk";

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks: (state, action) => {
      return action.tasks;
    },
    saveTask: (state, action) => {
      return state.tasks.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loadTasksThunkTlk.pending, state => {
        state.status = "loading"; // Během načítání dat
      })
      .addCase(loadTasksThunkTlk.fulfilled, (state, action) => {
        state.status = "succeeded"; // Úspěšně načteno
        state.tasks = action.payload; // Nastaví data
      })
      .addCase(loadTasksThunkTlk.rejected, (state, action) => {
        state.status = "failed"; // Chyba při načítání
        state.error = action.error.message;
      });
  }
});

export const { loadTasks } = taskSlice.actions;
export default taskSlice.reducer;
