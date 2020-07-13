import React from 'react';
import { Counter } from '../../../components/counter/Counter';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from '../../../reducers/counter';
import CounterDisplay from '../../../components/counter/CounterDisplay';
import CounterButtons from '../../../components/counter/CounterButtons';

configure({ adapter: new Adapter() });

describe('Counter', () => {
	it('Deberia tener un CounterDisplay', () => {
		const wrapper = shallow(<Counter />);
		const foundElement = wrapper.find('CounterDisplay');
		expect(foundElement.length).toBe(1);
	});
	it('Deberia tener un CounterButtons', () => {
		const wrapper = shallow(<Counter />);
		const foundElement = wrapper.find('CounterButtons');
		expect(foundElement.length).toBe(1);
	});
});

describe('CounterDisplay', () => {
	it('deberia tener un h1 que renderize el prop de counter', () => {
		const mockCounter = 0;
		const wrapper = shallow(<CounterDisplay counter={mockCounter} />);
		const foundElement = wrapper.find('h1');
		expect(foundElement.text()).toMatch(mockCounter.toString());
	});
});

describe('CounterButtons', () => {
	it('deberia tener un boton para incrementar', () => {
		const wrapper = shallow(<CounterButtons />);
		const foundElement = wrapper.find('[data-cy="incrementButton"]');
		expect(foundElement);
	});
	it('deberia tener un boton para decrementar', () => {
		const wrapper = shallow(<CounterButtons />);
		const foundElement = wrapper.find('[data-cy="decrementButton"]');
		expect(foundElement);
	});
	it('el boton de incrementar deberia ejecutar la función increment si hago click en el', () => {
		const increment = jest.fn();
		const wrapper = shallow(<CounterButtons increment={increment} />);
		wrapper.find('[data-cy="incrementButton"]').simulate('click');
		expect(increment.mock.calls.length).toBe(1);
	});
	it('el boton de decrementar deberia ejecutar la función decrement si hago click en el', () => {
		const decrement = jest.fn();
		const wrapper = shallow(<CounterButtons decrement={decrement} />);
		wrapper.find('[data-cy="decrementButton"]').simulate('click');
		expect(decrement.mock.calls.length).toBe(1);
	});
});
