import { v4 as uuidv4 } from "uuid";
import { catData, defaultCatImg } from "../utils/mock/cats";
import updateObjectInArray from "../utils/functions/Arrays/updateObjectInArray";
import { makeType } from "../utils/functions/redux/makeType";
import { mac } from "../utils/functions/redux/mac";
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
export const fetchCat = mac(FETCH);
export const updateCat = mac(UPDATE, "payload");

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
          id: uuidv4(),
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
