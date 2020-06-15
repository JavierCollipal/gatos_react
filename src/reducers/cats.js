//ACTION TYPES
const ADD = "CAT/ADD";
const DELETE = "CAT/DELETE";
const FETCH = "CAT/FETCH";
const SETTER = "CAT/SETTER";
//ACTION CREATORS
export const addCat = () => ({ type: ADD });
export const deleteCat = () => ({ type: DELETE });
export const fetchCat = () => ({ type: FETCH });

//ACTION SETTER
export const setter = (payload) => ({
  type: SETTER,
  payload,
});

//extra
const mockCat = () => ({
  id: Date.now(),
  name: "lanita",
  age: 1,
  breed: "angora",
  imageUrl:
    "https://pbs.twimg.com/profile_images/378800000466242036/54d24bd84122f283eeabb0608e629f2b.jpeg",
});
const catData = [mockCat, mockCat];
//STATE
const initialState = [];
//REDUCER
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return state.concat(mockCat);
    case DELETE:
      return state;
    case FETCH:
      return state.concat(...catData);
    case SETTER:
      return state;
    default:
      return state;
  }
}
