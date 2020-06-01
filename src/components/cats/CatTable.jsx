import React from 'react'
import PropTypes from "prop-types";
import MaterialTable from "material-table";

const handleUpdate = (cat) => {
    console.log(cat)
};
const CatTable = ({title, cats}) => {
    const tableColumns = [
        { title: 'Nombre', field: 'name' },
        { title: 'Raza', field: 'breed' },
        { title: 'Edad', field: 'age', type: 'numeric' },
    ];

    return (
        <div>
            <MaterialTable
                title={title}
                columns={tableColumns}
                data={cats}
                onRowClick={(event,rowData) => handleUpdate(rowData)}
            />
        </div>
    );
};


CatTable.propTypes = {
    title: PropTypes.string.isRequired,
};
export default  CatTable;
