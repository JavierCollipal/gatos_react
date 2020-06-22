import React from "react";
import TextField from "@material-ui/core/TextField";

const CustomField = (props) => {
  const { input, meta } = props;
  return (
    <div>
      <TextField {...input} {...props} />
      {meta.submitFailed && meta.error && <span> {meta.error} </span>}
    </div>
  );
};

export default CustomField;
