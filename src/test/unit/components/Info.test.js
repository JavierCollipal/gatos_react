import React from 'react';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Info from '../../../components/info/Info';
import InfoDisplay from '../../../components/info/InfoDisplay';

configure({ adapter: new Adapter() });

describe('Info', () => {
	it('Deberia tener un p que describa que pasa en este componente', () => {
		const wrapper = shallow(<Info />);
		const foundElement = wrapper.find('p');
		expect(foundElement.text().length).toBeGreaterThanOrEqual(20);
	});
	it('Deberia tener uno o mas InfoDisplay', () => {
		const wrapper = shallow(<Info />);
		const infoDisplays = wrapper.find('InfoDisplay');
		expect(infoDisplays.length).toBeGreaterThanOrEqual(1);
	});
});

describe('InfoDisplay', () => {
	it('Deberia tener un h1 que renderize el prop de titulo', () => {
		const mockTitle = 'este es el titulo : backend frontend devops etc';
		const wrapper = shallow(<InfoDisplay title={mockTitle} />);
		const foundElement = wrapper.find('h1');
		expect(foundElement.text()).toMatch(mockTitle);
	});
	it('Deberia tener un p que renderize el prop de contenido', () => {
		const mockContent = 'en este contenido va ir la descripcion de la tecnologia x';
		const wrapper = shallow(<InfoDisplay content={mockContent} />);
		const foundElement = wrapper.find('p');
		expect(foundElement.text()).toMatch(mockContent);
	});
});
