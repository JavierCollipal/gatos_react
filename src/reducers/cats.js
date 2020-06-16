//ACTION TYPES
import { catData } from "../utils/mock/cats";

const ADD = "CAT/ADD";
const DELETE = "CAT/DELETE";
const FETCH = "CAT/FETCH";
const SETTER = "CAT/SETTER";

//ACTION CREATORS
//funciones que hacen dispatch de una action de manera mas simple
export const addCat = (payload) => ({ type: ADD, payload });
export const deleteCat = (id) => ({ type: DELETE, id });
export const fetchCat = () => ({ type: FETCH });

export const setter = (payload) => ({
  type: SETTER,
  payload,
});

//extra
//STATE
const initialState = [];
//REDUCER
const catReducer = (state = initialState, action) => {
  console.log("esta es la action de la store", action);
  switch (action.type) {
    case ADD:
      return state.concat(action.payload);
    case DELETE:
      const findCatIndex = state.find((cat) => cat.id === action.payload);
      return state;
    case FETCH:
      return state.concat(...catData);
    case SETTER:
      return state;
    default:
      return state;
  }
};

export default catReducer;
