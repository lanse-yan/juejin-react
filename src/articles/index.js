import React from "react";
import TagNav from "../tag/TagNav";
import { useParams } from "react-router-dom";
import Articles from "../articles";
import { connect } from "react-redux";

function App({ categoryList }) {
  const { categoryTitle } = useParams();
  const category = categoryList.find((item) => item.title === categoryTitle);
  return (
    <div className="view">{category && <TagNav category={category} />}</div>
  );
}
function mapStateToProps(state) {
  return {
    categoryList: state.tag.categoryItems,
  };
}
export default connect(mapStateToProps)(App);
