import React from 'react'
import PropTypes from "prop-types";
import MaterialTable from "material-table";

const handleUpdate = (cat) => {
    console.log(cat)
};
const CatTable = ({title}) => {
    const tableColumns = [
        { title: 'Nombre', field: 'name' },
        { title: 'Raza', field: 'breed' },
        { title: 'Edad', field: 'age', type: 'numeric' },
    ];
    const tableData = [
        { name: 'Lanita', breed: 'Angora', age: 237},
        { name: 'Plomo', breed: 'Angora', age: 27},
        { name: 'Micha', breed: 'Carey', age: 3},
    ];
    const [state] = React.useState({
        tableColumns,
        tableData,
    });

    return (
        <div>
            <MaterialTable
                title={title}
                columns={state.tableColumns}
                data={state.tableData}
                onRowClick={(event,rowData) => handleUpdate(rowData)}
            />
        </div>
    );
};


CatTable.propTypes = {
    title: PropTypes.string.isRequired,
};
export default  CatTable;
