import React from 'react';
import { Link } from 'react-router-dom';

const HomeInfo = () => {
	return (
		<p data-cy="homeInfo">
			Diviertete interactuando con el crud de gatos o tambien puedes interactuar con el
			contador. <br />
			La intención de este proyecto es mantenerse simple pero robusto en su base, para mayor
			informacion tecnica puedes consultar <Link to="/tech-info">aca.</Link>
		</p>
	);
};

export default HomeInfo;
