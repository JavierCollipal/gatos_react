import React from 'react';
import { Counter } from '../../../components/counter/Counter';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { initialState } from '../../../reducers/counter';

configure({ adapter: new Adapter() });

describe('Counter', () => {
	it('deberia tener dos botones', () => {
		const wrapper = mount(<Counter />);
		const buttons = wrapper.find('button');
		expect(buttons).toHaveLength(2);
	});
	it('incremente en 1 el estado cuando presione incrementar', () => {
		const increment = jest.fn();

		const wrapper = mount(<Counter counter={initialState} increment={increment} />);

		wrapper.find('button').at(0).simulate('click');
		expect(increment.mock.calls.length).toBe(1);
	});
	it('decremente en 1 el estado cuando presione decrementer', () => {
		const decrement = jest.fn();
		const wrapper = mount(<Counter counter={initialState} decrement={decrement} />);

		wrapper.find('button').at(1).simulate('click');
		expect(decrement.mock.calls.length).toBe(1);
	});
});
