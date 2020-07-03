import { makeType } from "../utils/functions/redux/makeType";
import { mac } from "../utils/functions/redux/mac";
import createStoreReducer from "../utils/functions/redux/createReducer";

const t = makeType("COUNTER");
//ACTION TYPES
//El tipo de acción que vamos a ejecutar en la store, es una variable string que almacena el tipo a usar en el case del reducer.
export const INCREMENT = t("INCREMENT");
export const DECREMENT = t("DECREMENT");

//ACTION CREATORS
//Es una función que devuelve un objeto { type: ActionType },es útil para definir el tipo de
//acción que queremos ejecutar en la store sin especificar un action type directamente.
export const increment = mac(INCREMENT);
export const decrement = mac(DECREMENT);

//estado inicial de nuestro reducer
export const initialState = 0;
//REDUCER
//Una función que intercepta cuando se hace dispatch de una acción y en base a su tipo actualiza el estado,
//siempre se realiza de una manera inmutable.
export default createStoreReducer(initialState, {
  [INCREMENT]: (state) => state + 1,
  [DECREMENT]: (state) => state - 1,
});
