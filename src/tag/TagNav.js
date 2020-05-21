import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Tags } from "./Tags";
import { CaretDownOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import { bindActionCreators } from "redux";
import { fetchTagList } from "./redux/action";

function App({ category, tags, fetchTagList }) {
  useEffect(() => {
    if (category && tags.length === 0) {
      // category存在，但是tags没有
      fetchTagList(category.id);
    }
  }, [category, tags.length, fetchTagList]);
  function getTags() {
    return tags[category.id] || [];
  }
  const defaultTags = [{ title: "全部", tagId: "" }, ...getTags().slice(0, 8)];
  const [newTags, setNewTags] = useState(defaultTags);
  return (
    <nav className="tag-nav">
      <div className="nav-list">
        <Tags tagList={newTags} />
        {newTags.length < 10 && (
          <Tag onClick={setNewTags([...defaultTags, ...getTags().slice(8)])}>
            展开
            <CaretDownOutlined />
          </Tag>
        )}
      </div>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tag.tagItems,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTagList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
