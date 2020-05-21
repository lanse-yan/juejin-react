import React, { useEffect } from "react";
import { Tag } from "antd";
import { fetchTagList } from "./redux/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

export function Tags({ tagList }) {
  return (
    <div className="tag-list">
      {tagList.map((tag) => (
        <Tag key={tag.tagId}>{tag.title}</Tag>
      ))}
    </div>
  );
}

function App({ tagList, fetchTagList, categoryId }) {
  useEffect(() => {
    fetchTagList(categoryId);
  }, [categoryId, fetchTagList]);
  return <Tags tagList={tagList[categoryId] || []} />;
}

function mapStateToProps(state) {
  return {
    tagList: state.tag.tagItems,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTagList }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
