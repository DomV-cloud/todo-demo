import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "react-final-form";

const CreateTaskForm = ({ onSubmit, onChange, task }) => {
  // yup validations
  const validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }
    if (!values.priority) {
      errors.priority = "Priority is required";
    }
    return errors;
  };

  return (
    // use onChange really?
    <Form
      onSubmit={values => onSubmit(values)}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h2>Add Task</h2>
          <div>
            <label>Title</label>
            <Field
              name="title"
              render={({ input, meta }) => (
                <div>
                  <input
                    {...input} // Automaticky propojí input s hodnotami a onChange
                    onChange={event => handleChange(event)} // Předání vlastní onChange
                    placeholder="Title"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    />
  );
};

CreateTaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired
};

export default CreateTaskForm;
