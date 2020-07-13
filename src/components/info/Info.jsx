import React from 'react';
import InfoDisplay from './InfoDisplay';
import {
	backendContent,
	componentPattern,
	frontendContent,
	generalInfo,
	testingContent,
} from './infoData';

const Info = () => {
	return (
		<div>
			<p data-cy="general-info">{generalInfo}</p>
			<InfoDisplay title="frontend" content={frontendContent} />
			<InfoDisplay title="backend" content={backendContent} />
			<InfoDisplay title="component design pattern" content={componentPattern} />
			<InfoDisplay title="testing" content={testingContent} />
		</div>
	);
};

export default Info;
