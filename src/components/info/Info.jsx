import React from 'react';
import InfoDisplay from './InfoDisplay';

const generalInfo = `Aqui puedes encontrar información tecnica sobre las tecnologias que se usan en este proyecto`;
//recordatorio, esto tiene potencial para ser llevado a la db.
const backendContent = `en este proyecto estoy ocupando express y mongoDb para guardar a los gatos`;
const frontendContent = `en este proyecto estoy ocupando react, y redux para administrar el estado `;
const componentPattern = `en este proyecto estoy trabajando con componentes funcionales y los complemento con react hooks`;

const Info = () => {
	return (
		<div>
			<p data-cy="general-info">{generalInfo}</p>
			<InfoDisplay title="frontend" content={frontendContent} />
			<InfoDisplay title="backend" content={backendContent} />
			<InfoDisplay title="component design pattern" content={componentPattern} />
		</div>
	);
};

export default Info;
