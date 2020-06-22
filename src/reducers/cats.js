//ACTION TYPES
import { catData, defaultCatImg } from "../utils/mock/cats";
import updateObjectInArray from "../utils/functions/Arrays/updateObjectInArray";

const ADD = "CAT/ADD";
const DELETE = "CAT/DELETE";
const UPDATE = "CAT/UPDATE";
const FETCH = "CAT/FETCH";

//ACTION CREATORS
//funciones que hacen dispatch de una action de manera mas simple
export const addCat = (payload) => ({ type: ADD, payload });
export const deleteCat = (id) => ({ type: DELETE, id });
export const fetchCat = () => ({ type: FETCH });
export const updateCat = (payload) => ({ type: UPDATE, payload });

//extra
//STATE
const initialState = [];
//REDUCER
const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newCat = {
        ...action.payload,
        ...{
          id: Date.now(),
          imageUrl: defaultCatImg || action.payload.imageUrl,
        },
      };
      return [...state, newCat];
    case DELETE:
      return state.filter((cat) => cat.id !== action.id);
    case UPDATE:
      return updateObjectInArray(state, action);
    case FETCH:
      return [...catData];
    default:
      return state;
  }
};

export default catReducer;
