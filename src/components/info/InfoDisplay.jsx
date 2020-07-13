import React from 'react';

const InfoDisplay = ({ title, content }) => {
	return (
		<div data-cy="info-display">
			<h1 data-cy="info-title">{title}</h1>
			<p data-cy="info-content">{content}</p>
		</div>
	);
};

export default InfoDisplay;
