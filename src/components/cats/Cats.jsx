import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { fetchCatsAsync, addCatAsync, deleteCatAsync, updateCatAsync } from '../../reducers/cats';
import CatForm from './CatForm';
import CatList from './CatList';
import { defaultCatImg } from '../../utils/mock/cats';
import Skeleton from '@material-ui/lab/Skeleton';

export const Cats = ({ cats, loading, error, addCat, fetchCats, deleteCat, updateCat }) => {
	const [formData, setFormData] = useState();
	const [dialog, setDialog] = useState(false);
	const [updateMode, setUpdateMode] = useState(false);

	const handleUpdate = cat => {
		setFormData(cat);
		setUpdateMode(true);
		//ver como pasarle los valores a form redux para actualizar el gato
		setDialog(true);
	};
	const handleDelete = catId => {
		deleteCat(catId);
	};
	const handleCreate = () => {
		setFormData(null);
		setDialog(true);
		setUpdateMode(false);
	};
	const handleFormSubmit = payload => {
		//arreglo momentaneo para el error de redux-form(initialValues no esta pasando la id si es update)
		//arreglo momentaneo para el caso de create, asignar parametros adentro del reducer estaba mal ya que no estaba corriendo bien el test de add por esto mismo
		//de todas maneras con redux thunk en add se solucionaria el problema de asignar estos valores en esta funcion
		if (updateMode) payload = { ...payload, id: formData._id };
		else payload = { ...payload, imageUrl: defaultCatImg };
		setDialog(false);
		updateMode ? updateCat(payload) : addCat(payload);
	};

	//simulamos componentDidMount con un arreglo en blanco como segundo parametro,
	//en este caso lleva la funcion fetchCat por recomendación del linter
	useEffect(() => {
		fetchCats();
	}, [fetchCats]);

	return (
		<div>
			{loading ? (
				<Skeleton animation="wave" />
			) : (
				<div>
					<Button color="primary" onClick={handleCreate} data-cy="catAddButton">
						Añade un nuevo gato
					</Button>
					<CatList cats={cats} handleDelete={handleDelete} handleUpdate={handleUpdate} />
				</div>
			)}

			<CatForm
				onSubmit={handleFormSubmit}
				manageDialog={setDialog}
				dialogState={dialog}
				updateMode={updateMode}
				initialValues={formData}
			/>
		</div>
	);
};
//esta funcion se encarga de pasar el estado que necesitamos como props
const mapStateToProps = state => {
	const cats = state.cats.data;
	const { loading, error } = state.cats;
	return { cats, loading, error };
};
//esta funcion se encarga de pasar las acciones de la store como props de componentes
//y esto se logra creando una funcion que devuelve un objeto
const mapDispatchToProps = dispatch => ({
	addCat: payload => dispatch(addCatAsync({ cat: payload })),
	fetchCats: () => dispatch(fetchCatsAsync()),
	//un setter seria el equivalente a una mutaction en vue
	deleteCat: payload => dispatch(deleteCatAsync({ id: payload })),
	updateCat: payload => dispatch(updateCatAsync({ cat: payload })),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cats);
