import React from "react";
import { Field, reduxForm } from "redux-form";
import CustomField from "../ui/CustomField";

const validate = (values) => {
  const errors = {};
  const requiredFieldMessage = "campo obligatorio";
  if (!values.name) {
    errors.name = requiredFieldMessage;
  }
  if (!values.age) {
    errors.age = requiredFieldMessage;
  }
  if (!values.breed) {
    errors.breed = requiredFieldMessage;
  }
  return errors;
};

const CatForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={CustomField}
        placeholder="Nombre"
        title="Nombre"
        type="text"
      />
      <Field
        name="age"
        component={CustomField}
        placeholder="Edad"
        title="Edad"
        type="number"
      />
      <Field
        name="breed"
        component={CustomField}
        placeholder="Raza"
        title="Raza"
        type="text"
      />
      <input type="submit" value="enviar gato" />
    </form>
  );
};

export default reduxForm({ form: "CatForm", validate })(CatForm);
