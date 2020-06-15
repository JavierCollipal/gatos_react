//ACTION TYPES
const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const SETTER = "COUNTER/SETTER";

//ACTION CREATORS
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
//ACTION SETTER
export const setter = (payload) => ({
  type: SETTER,
  payload,
});

const initialState = 0;
//REDUCER
//Siempre tiene que retornar estados inmutables
export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state + 1;
    case SETTER:
      return action.payload;
    default:
      break;
  }
}
