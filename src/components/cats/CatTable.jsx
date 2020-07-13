import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

const tableColumns = [
	{ title: 'Id', field: 'id' },
	{ title: 'Nombre', field: 'name' },
	{ title: 'Raza', field: 'breed' },
	{ title: 'Edad', field: 'age', type: 'numeric' },
];

const CatTable = ({ title, cats, handleUpdateModal }) => {
	return (
		<div>
			<MaterialTable
				title={title}
				columns={tableColumns}
				data={cats}
				onRowClick={(event, rowData) => handleUpdateModal(rowData)}
			/>
		</div>
	);
};

CatTable.propTypes = {
	title: PropTypes.string.isRequired,
};
export default CatTable;
