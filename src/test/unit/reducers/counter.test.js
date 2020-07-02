import {
  increment,
  decrement,
  INCREMENT,
  DECREMENT,
} from "../../../reducers/counter";
import counterReducer from "../../../reducers/counter";

//ACTION CREATOR TESTING
//from testing redux docs link: https://redux.js.org/recipes/writing-tests
//In Redux, action creators are functions which return plain objects.
// When testing action creators, we want to test whether the correct
// action creator was called and also whether the right action was returned.
describe("actions creators testing", () => {
  it("increment should create an action to increment the counter", () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(increment()).toEqual(expectedAction);
  });
  it("decrement should create an action to decrement the counter", () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(decrement()).toEqual(expectedAction);
  });
});

//REDUCER TESTING
//A reducer should return the new state after applying the action to the previous state,
//and that's the behavior tested below
describe("counter reducer", () => {
  it("should return the initial state", () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });
  it("should handle  the INCREMENT action", () => {
    expect(counterReducer(0, increment())).toEqual(1);
  });
  it("should handle  the DECREMENT action", () => {
    expect(counterReducer(0, decrement())).toEqual(-1);
  });
});
