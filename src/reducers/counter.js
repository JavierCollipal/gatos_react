import { makeType } from "../utils/functions/redux/makeType";
import { mac } from "../utils/functions/redux/mac";

const t = makeType("COUNTER");
//ACTION TYPES
//El tipo de acción que vamos a ejecutar en la store, es una variable string que almacena el tipo a usar en el case del reducer.
export const INCREMENT = t("INCREMENT");
export const DECREMENT = t("DECREMENT");
export const SETTER = t("SETTER");

//ACTION CREATORS
//Es una función que devuelve un objeto { type: ActionType },es útil para definir el tipo de
//acción que queremos ejecutar en la store sin especificar un action type directamente.
export const increment = mac(INCREMENT);
export const decrement = mac(DECREMENT);
export const setter = mac(SETTER, "payload");

//estado inicial de nuestro reducer
const initialState = 0;
//REDUCER
//Una función que intercepta cuando se hace dispatch de una acción y en base a su tipo actualiza el estado,
//siempre se realiza de una manera inmutable.
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case SETTER:
      return action.payload;
    default:
      return state;
  }
};

export default counterReducer;
