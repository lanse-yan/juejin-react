import React from "react";
import TagNav from "./TagNav";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function App({ categoryList }) {
  const { categoryTitle, tagTitle } = useParams();
  const category = categoryList.find((item) => item.title === categoryTitle);
  return (
    <>
      {category && <TagNav category={category} tagTitle={tagTitle || "全部"} />}
    </>
  );
}
function mapStateToProps(state) {
  return {
    categoryList: state.tag.categoryItems,
  };
}
export default connect(mapStateToProps)(App);
