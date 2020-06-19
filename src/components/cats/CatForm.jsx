import React from "react";
import { Field, reduxForm } from "redux-form";

const CatForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" component="input" type="text" />
      <Field name="age" component="input" type="number" />
      <Field name="breed" component="input" type="text" />
      <input type="submit" value="enviar gato" />
    </form>
  );
};

export default reduxForm({ form: "CatForm" })(CatForm);
