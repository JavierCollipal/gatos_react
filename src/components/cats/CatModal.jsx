import React from 'react'

const CatModal = (props) => {
    const { cat } = props;
    return (
        <div>
            <h1>{cat.name}</h1>
            <h1>{cat.age}</h1>
            <h1>{cat.breed}</h1>
        </div>

    )
};

export default CatModal;
