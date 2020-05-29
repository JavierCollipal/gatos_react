import React from 'react'
import PropTypes from "prop-types";
import MaterialTable from "material-table";

const CatTable = ({title}) => {
    const tableColumns = [
        { title: 'Nombre', field: 'name' },
        { title: 'Raza', field: 'breed' },
        { title: 'Edad', field: 'age', type: 'numeric' },
    ];
    const tableData =[
        { name: 'Lanita', breed: 'Angora', age: 1987},
        { name: 'Plomo', breed: 'Angora', age: 1987},
        { name: 'Micha', breed: 'Carey', age: 1987},
    ];
    const [state, setState] = React.useState({
        tableColumns,
        tableData,
    });

    return (
        <div>
            <MaterialTable
                title={title}
                columns={state.tableColumns}
                data={state.tableData}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.tableData];
                                    data.push(newData);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.tableData];
                                    data.splice(data.indexOf(oldData), 1);
                                    return { ...prevState, data };
                                });
                            }, 600);
                        }),
                }}
            />
        </div>

    );
};


CatTable.propTypes = {
    title: PropTypes.string.isRequired,
};
export default  CatTable;
