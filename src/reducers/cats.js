//ACTION TYPES
import { catData, defaultCatImg } from "../utils/mock/cats";

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
  switch (action.type) {
    case ADD:
      const { payload } = action;
      console.log(payload);
      const newCat = Object.assign(payload, {
        id: Date.now(),
        imageUrl: defaultCatImg || payload.imageUrl,
      });

      return [...state, newCat];
    case DELETE:
      const catIndex = state.find((cat) => cat.id === action.payload);
      return state.splice(catIndex, 1);
    case FETCH:
      return [...state, ...catData];
    case SETTER:
      return state;
    default:
      return state;
  }
};

export default catReducer;
