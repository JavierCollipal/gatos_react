import updateObjectInArray from '../utils/functions/Arrays/updateObjectInArray';
import { makeType } from '../utils/functions/redux/makeType';
import { mac } from '../utils/functions/redux/mac';
import catApi from '../api/cats';

//ACTION TYPES
const t = makeType('CAT');
export const ADD = t('ADD');
export const DELETE = t('DELETE');
export const UPDATE = t('UPDATE');
export const FETCH = t('FETCH');
//THUNK V2 base
export const ACTION_START = t('ACTION_START');
export const ACTION_ERROR = t('ACTION_ERROR');

//ACTION CREATORS
//mac function used
//funciones que hacen dispatch de una action de manera mas simple
export const addCat = mac(ADD, 'payload');
export const deleteCat = mac(DELETE, 'id');
export const fetchCat = mac(FETCH, 'payload');
export const updateCat = mac(UPDATE, 'payload');
//no necesitamos repetir start, success y error por el momento
export const actionStart = mac(ACTION_START);
export const actionError = mac(ACTION_ERROR, 'error');

//THUNK
//un thunk es una función que devuelve una función, de este modo puede retrasar la ejecución de algo.
//ej problematica: const x = a + b, es una operación que se inicia en su momento de declaración
//ej thunk: const thunk = () => a + b, el calculo ahora es una función y con esto podemos elegir cuando realizar el calculo
//en el contexto de redux, un thunk es un action creator que devuelve una funcion en vez de un objeto
export const fetchCatsAsync = () => {
	//esta funcion que se devuelve, se encarga de ejecutar el codigo asincrono y realizar el dispatch de una acción
	//ej: una llamada a la api de gatos con axios y cuando vuelve la llamada, se realiza el dispatch de then o catch
	return async dispatch => {
		//llamamos a axios
		dispatch(actionStart());
		try {
			const response = await catApi.fetchCats();
			const { cats } = response.data;
			dispatch(fetchCat(cats));
		} catch (e) {
			dispatch(actionError('no fue posible cargar los gatos'));
		}
	};
};
export const addCatAsync = ({ cat }) => {
	return async dispatch => {
		dispatch(actionStart());
		try {
			const savedCat = await catApi.createCat(cat);
			dispatch(addCat(savedCat));
		} catch (e) {
			dispatch(actionError('no fue posible cargar los gatos'));
		}
	};
};
export const updateCatAsync = ({ cat }) => {
	return async dispatch => {
		dispatch(actionStart());
		try {
			await catApi.updateCat(cat._id, cat);
			dispatch(updateCat(cat));
		} catch (e) {
			dispatch(actionError('no fue posible cargar los gatos'));
		}
	};
};
export const deleteCatAsync = ({ id }) => {
	return async dispatch => {
		dispatch(actionStart());
		try {
			await catApi.deleteCat(id);
			dispatch(deleteCat(id));
		} catch (e) {
			dispatch(actionError('no fue posible cargar los gatos'));
		}
	};
};
//extra
//STATE
export const initialState = {
	data: [],
	loading: false,
	error: null,
};
//REDUCER
const catReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return {
				...state,
				data: [
					...state.data,
					{
						...action.payload,
					},
				],
				loading: false,
			};
		case DELETE:
			return {
				...state,
				data: state.data.filter(cat => cat._id !== action.id),
				loading: false,
			};
		case UPDATE:
			return {
				...state,
				data: updateObjectInArray(state.data, action.payload),
				loading: false,
			};
		case ACTION_START:
			return { ...state, loading: true };
		case FETCH:
			return { ...state, data: action.payload, loading: false };
		case ACTION_ERROR:
			return { ...state, error: action.error, loading: false };
		default:
			return { ...state };
	}
};
export default catReducer;
