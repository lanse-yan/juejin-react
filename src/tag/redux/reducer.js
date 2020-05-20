import { reducer as fetchCategoryListReducer } from "./fetchCategoryList";
import { reducer as fetchTagListReducer } from "./fetchTagList";
import initialState from "./initialState";

const reducers = [fetchCategoryListReducer, fetchTagListReducer];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
