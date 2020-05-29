import React from "react";
import PropTypes from "prop-types";

const Title = (props) => <h1> {props.name}</h1>;

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
