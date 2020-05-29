import React from 'react'
import PropTypes from "prop-types";


const CatTable = ({name}) => <h1>hola vieja, {name}</h1>;

CatTable.propTypes = {
    name: PropTypes.string.isRequired,
};
export default  CatTable;
