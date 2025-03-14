import React, { useEffect } from "react";
import { Field, Form } from "react-final-form";
import { newTask } from "../../../../../tools/mockData";
import { useSelector, useDispatch } from "react-redux";
import { loadTasksThunkTlk } from "../../../../redux-tlk/reduxThunks/loadTasksThunkTlk";
import { saveTaskThunkTlk } from "../../../../redux-tlk/reduxThunks/saveTaskThunkTlk";
import { deleteTaskThunkTlk } from "../../../../redux-tlk/reduxThunks/deleteTaskThunkTlk";

// using Redux tlk
export default function TasksHomePageTlk() {
  const tasks = useSelector(state => state.tasks.tasks || []); // I would change tasks to something different, it not readable
  const dispatch = useDispatch();

  function handleSubmit(values) {
    const task = { ...values, id: values.id };
    dispatch(saveTaskThunkTlk(task));
  }

  function handleDelete(id) {
    if (id) {
      dispatch(deleteTaskThunkTlk(id));
    }
  }

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(loadTasksThunkTlk());
    }
  }, []);

  return (
    <div>
      <h1>Tasks - Redux - TLK</h1>

      <Form
        onSubmit={handleSubmit}
        initialValues={newTask}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="Task Title"
              />
            </div>
            <div>
              <button type="submit" disabled={submitting || pristine}>
                Save Task
              </button>
            </div>
          </form>
        )}
      />
      <div>
        {tasks.map(task => {
          return (
            <div key={task.id}>
              {task.title}{" "}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
