import React from "react";
import TagNav from "../tag/TagNav";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function App({ categoryList }) {
  const { categoryTitle, tagTitle } = useParams();
  const category = categoryList.find((item) => item.title === categoryTitle);
  return <div>ssss</div>;
}
function mapStateToProps(state) {
  return {
    categoryList: state.tag.categoryItems,
  };
}
export default connect(mapStateToProps)(App);
