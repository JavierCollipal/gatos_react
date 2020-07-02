import {
  ADD,
  DELETE,
  UPDATE,
  FETCH,
  addCat,
  deleteCat,
  updateCat,
  fetchCat,
} from "../../../reducers/cats";
import catReducer from "../../../reducers/cats";
import { mockCatData } from "../../../utils/mock/cats";

//ACTION CREATOR TESTING
describe("actions creators testing", () => {
  it("add should create an action to add a cat", () => {
    const expectedAction = {
      type: ADD,
      payload: {},
    };
    expect(addCat({})).toEqual(expectedAction);
  });
  it("delete should create an action to delete a cat", () => {
    const expectedAction = {
      type: DELETE,
      id: 1,
    };
    expect(deleteCat(1)).toEqual(expectedAction);
  });
  it("update should create an action to update a cat", () => {
    const expectedAction = {
      type: UPDATE,
      payload: {},
    };
    expect(updateCat({})).toEqual(expectedAction);
  });
  it("fetch should create an action to fetch cats array", () => {
    const expectedAction = {
      type: FETCH,
      payload: mockCatData,
    };
    expect(fetchCat(mockCatData)).toEqual(expectedAction);
  });
});

//REDUCER TESTING
/*describe("cat reducer", () => {
/*describe("cat reducer", () => {
  it("should return the initial state", () => {
    expect(catReducer(undefined, {})).toEqual(0);
  });
  it("should handle  the INCREMENT action", () => {
    expect(catReducer(0, increment())).toEqual(1);
  });
  it("should handle  the DECREMENT action", () => {
    expect(catReducer(0, decrement())).toEqual(-1);
  });
});*/
