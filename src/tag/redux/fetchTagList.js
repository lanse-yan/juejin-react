import { FETCH_TAG_LIST_SUCCESS } from "./constants";
import api from "../../api/category";
export function fetchTagList(categoryId) {
  return (dispatch) => {
    return api.tags(categoryId).then(({ data }) => {
      dispatch({
        type: FETCH_TAG_LIST_SUCCESS,
        data: { [categoryId]: data },
      });
    });
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_TAG_LIST_SUCCESS:
      return {
        ...state,
        tagItems: { ...state.tagItems, ...action.data },
      };
    default:
      return state;
  }
}
