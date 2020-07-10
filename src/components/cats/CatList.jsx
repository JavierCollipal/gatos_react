import React from 'react';
import Grid from '@material-ui/core/Grid';
import CatCard from './CatCard';

const CatList = ({ cats, handleDelete, handleUpdate }) => {
	const cardsArray = cats.map((cat, index) => (
		<Grid item xs={4} key={index} data-cy="catCard">
			<CatCard cat={cat} handleDelete={handleDelete} handleUpdate={handleUpdate} />
		</Grid>
	));
	return (
		<Grid container spacing={1}>
			{cardsArray}
		</Grid>
	);
};

export default CatList;
