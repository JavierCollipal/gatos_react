import React from 'react'
import PropTypes from "prop-types";


const CatTable = ({title,cats}) => {
    const catList = cats.map((cat, index) => <p key={index}>{cat}</p>);
    return (
        <div>
            <h1>{title}</h1>
            <h1>{catList}</h1>
        </div>
    )
};


CatTable.propTypes = {
    title: PropTypes.string.isRequired,
    cats: PropTypes.string.isRequired
};
export default  CatTable;
