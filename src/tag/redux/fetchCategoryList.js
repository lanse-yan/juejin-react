import { FETCH_CATEGORY_LIST_SUCCESS } from "./constants";
import api from "../../api/category";
export function fetchCategoryList() {
  return (dispatch) => {
    return api.categories().then(({ d }) => {
      dispatch({
        type: FETCH_CATEGORY_LIST_SUCCESS,
        data: d.categoryList,
      });
    });
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case FETCH_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryItems: action.data,
      };
    default:
      return state;
  }
}
