import { v4 as uuidv4 } from 'uuid';

export const defaultCatImg =
	'https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg';
export const mockCatFactory = (id, name, age, breed, imageUrl) => ({
	_id: id,
	name: name,
	age: age,
	breed: breed,
	imageUrl: imageUrl || defaultCatImg,
});

export const mockCatData = [
	mockCatFactory(uuidv4(), 'lanita', 1, 'angora'),
	mockCatFactory(uuidv4(), 'esponjoso', 7, 'angora'),
	mockCatFactory(uuidv4(), 'serafina', 10, 'angora'),
	mockCatFactory(uuidv4(), 'micha', 10, 'calico'),
	mockCatFactory(uuidv4(), 'bigotes', 10, 'romano'),
];
