// 加载项目中所有的reducer
import tagReducer from "../tag/redux/reducer";
import { combineReducers } from "redux";

const reducerMap = {
  tag: tagReducer,
};

export default combineReducers(reducerMap);
