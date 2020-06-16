//ACTION TYPES
//El tipo de acción que vamos a ejecutar en la store, es una variable string que almacena el tipo a usar en el case del reducer.
const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const SETTER = "COUNTER/SETTER";

//ACTION CREATORS
//Es una función que devuelve un objeto { type: ActionType },es útil para definir el tipo de
//acción que queremos ejecutar en la store sin especificar un action type directamente.
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setter = (payload) => ({
  type: SETTER,
  payload,
});

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
