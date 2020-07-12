import React from 'react';
import Cats from '../../../components/cats/Cats';
import { mount, configure } from 'enzyme';
import { initialState } from '../../../reducers/cats';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Cats', () => {
	it('Deberia tener un boton de añadir nuevo gato');
	it('Deberia tener una lista de catCards');
});

describe('CatCard', () => {
	it('Deberia tener una imagen de gato');
	it('Deberia tener un boton para borrar el gato');
	it('Deberia tener un boton para actualizar el gato');
	it('Deberia mostrar el nombre del gato');
	it('Deberia mostrar la edad del gato');
	it('Deberia mostar la raza del gato');
});

describe('CatForm', () => {
	it('Deberia tener un campo de nombre');
	it('Deberia tener un campo de raza');
	it('Deberia tener un campo de edad');
	it('Deberia tener un boton para actualizar el gato');
	it('Deberia tener un boton para el gato');
	it('Deberia tener un boton para cancelar el formulario');
	it(
		'Deberia entregar un mensaje de actualizar/crear gato que actuan de acuerdo al props updateMode'
	);
});
