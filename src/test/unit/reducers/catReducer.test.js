import {
  ADD,
  DELETE,
  UPDATE,
  FETCH,
  addCat,
  deleteCat,
  updateCat,
  fetchCat,
  initialState,
} from "../../../reducers/cats";
import catReducer from "../../../reducers/cats";
import { mockCatData, mockCatFactory } from "../../../utils/mock/cats";
import { v4 as uuidv4 } from "uuid";

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
describe("cat reducer", () => {
  it("should return the initial state", () => {
    expect(catReducer(initialState, {})).toEqual(initialState);
  });
  it("should handle the ADD action", () => {
    const newCat = mockCatFactory(
      uuidv4(),
      "gato test",
      2,
      "raza de test",
      "soy una url"
    );
    const expectedState = {
      ...initialState,
      data: [...initialState.data, newCat],
    };
    expect(catReducer(initialState, addCat(newCat))).toEqual(expectedState);
  });
  it("should handle the DELETE action", () => {
    const newCat = mockCatFactory(
      uuidv4(),
      "gato test",
      2,
      "raza de test",
      "soy una url"
    );
    //a result of reducer function is the state after running the action
    const stateAfterAdd = catReducer(initialState, addCat(newCat));
    //we are going to add a cat then delete it by id, the expected response is a clean array in data
    const expectedState = { ...stateAfterAdd, data: [] };
    expect(catReducer(stateAfterAdd, deleteCat(newCat._id))).toEqual(
      expectedState
    );
  });
  it("should handle the UPDATE actiom", () => {
    const newCat = mockCatFactory(
      uuidv4(),
      "gato test",
      2,
      "raza de test",
      "soy una url"
    );
    //a result of reducer function is the state after running the action
    const stateAfterAdd = catReducer(initialState, addCat(newCat));
    //a basic update of name property
    const updatedCat = { ...newCat, name: "gato test actualizado" };
    //update always search by id match, the expected state should be the updatedCat instead of newCat
    const expectedState = { ...stateAfterAdd, data: [updatedCat] };

    expect(catReducer(stateAfterAdd, updateCat(updatedCat))).toEqual(
      expectedState
    );
  });
  it("should handle the FETCH action", () => {
    //fetch action add an antire array of cats to data
    const expectedState = { ...initialState, data: mockCatData };

    expect(catReducer(initialState, fetchCat(mockCatData))).toEqual(
      expectedState
    );
  });
});
