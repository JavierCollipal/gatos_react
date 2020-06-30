import { v4 as uuidv4 } from "uuid";
import { catData, defaultCatImg } from "../utils/mock/cats";
import updateObjectInArray from "../utils/functions/Arrays/updateObjectInArray";
import { makeType } from "../utils/functions/redux/makeType";
import { mac } from "../utils/functions/redux/mac";
import axios from "axios";
//recordar configurar axios en otra parte
const apiUrl =
  "https://my-json-server.typicode.com/JavierCollipal/json_cats/cats";

const t = makeType("CAT");
//ACTION TYPES
const ADD = t("ADD");
const DELETE = t("DELETE");
const UPDATE = t("UPDATE");
const FETCH = t("FETCH");

//ACTION CREATORS
//mac function used
//funciones que hacen dispatch de una action de manera mas simple
export const addCat = mac(ADD, "payload");
export const deleteCat = mac(DELETE, "id");
export const fetchCat = mac(FETCH, "payload");
export const updateCat = mac(UPDATE, "payload");

//THUNK
//un thunk es una función que devuelve una función, de este modo puede retrasar la ejecución de algo.
//ej problematica: const x = a + b, es una operación que se inicia en su momento de declaración
//ej thunk: const thunk = () => a + b, el calculo ahora es una función y con esto podemos elegir cuando realizar el calculo
//en el contexto de redux, un thunk es un action creator que devuelve una funcion en vez de un objeto
export const fetchCatsFromApi = () => {
  //esta funcion que se devuelve, se encarga de ejecutar el codigo asincrono y realizar el dispatch de una acción
  //ej: una llamada a la api de gatos con axios y cuando vuelve la llamada, se realiza el dispatch de then o catch
  return (dispatch) => {
    //llamamos a axios
    return axios
      .get(apiUrl)
      .then((response) => dispatch(fetchCat(response)))
      .catch((err) => console.log(err));
  };
};
//extra
//STATE
const initialState = {
  data: [],
  loading: false,
};
//REDUCER
const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newCat = {
        ...action.payload,
        ...{
          id: uuidv4(),
          imageUrl: defaultCatImg || action.payload.imageUrl,
        },
      };
      const newData = [...state.data, newCat];
      return { ...state, ...{ data: newData } };
    case DELETE:
      return {
        ...state,
        ...{ data: state.data.filter((cat) => cat.id !== action.id) },
      };
    case UPDATE:
      return {
        ...state,
        ...{ data: updateObjectInArray(state.data, action) },
      };
    case FETCH:
      return {
        ...state,
        ...{ data: action.payload },
      };

    default:
      return { ...state };
  }
};

export default catReducer;
