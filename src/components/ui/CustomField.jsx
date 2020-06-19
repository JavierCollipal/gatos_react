import React from "react";

const CustomField = (props) => {
  const { input, meta, title } = props;
  return (
    <div>
      {title && <span>{title}</span>}
      <input {...input} {...props} />
      {meta.submitFailed && meta.error && <span> {meta.error} </span>}
    </div>
  );
};

export default CustomField;
