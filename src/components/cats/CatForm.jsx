import React from "react";
import { Field, reduxForm } from "redux-form";

const handleSetter = () => {};
const handleChange = () => {};

const CatForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" />
      <Field name="age" />
      <Field name="breed" />
      <input type="submit" value="enviar gato" />
    </form>
  );
};

export default reduxForm({ form: "CatForm" })(CatForm);
