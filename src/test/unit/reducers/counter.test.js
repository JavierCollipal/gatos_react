import {
  increment,
  decrement,
  INCREMENT,
  DECREMENT,
} from "../../../reducers/counter";

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

//
