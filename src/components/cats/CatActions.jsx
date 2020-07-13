import React from 'react';

const CatActions = ({ changeCatData }) => {
	return (
		<div>
			<button onClick={() => changeCatData('CHANGE')}>Cambiar la data de gatos</button>
			<button onClick={() => changeCatData('RESTORE')}>Restaurar la data gatos</button>
		</div>
	);
};

export default CatActions;
