import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import { fetchTagList } from "./redux/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export function TagsToggle({ tagList, defaultKey, categoryTitle }) {
  const [isCollapse, setIsCollapse] = useState(true);
  const defaultTags = [{ title: "全部", tagId: "" }, ...tagList.slice(0, 8)];
  const leftTags = tagList.slice(8);
  return (
    <div className="tag-list">
      {defaultTags.map((tag) => (
        <Tag
          key={tag.tagId}
          className={defaultKey === tag.title ? "active" : ""}
        >
          <Link to={`/${categoryTitle}/${tag.title}`}>{tag.title}</Link>
        </Tag>
      ))}
      {isCollapse ? (
        <div className="tag-list">
          <Tag onClick={() => setIsCollapse(false)}>
            展开
            <CaretDownOutlined />
          </Tag>
        </div>
      ) : (
        leftTags.map((tag) => (
          <Tag key={tag.tagId}>
            <Link to={`/${categoryTitle}/${tag.title}`}>{tag.title}</Link>
          </Tag>
        ))
      )}
    </div>
  );
}
function Tags({ tagList, categoryTitle }) {
  const [selectedKey, setSelectedKey] = useState("");
  return (
    <div className="tag-list">
      {tagList.map((tag) => (
        <Tag
          key={tag.tagId}
          className={selectedKey === tag.title ? "active" : ""}
          onClick={() => setSelectedKey(tag.title)}
        >
          <Link to={`/${categoryTitle}/${tag.title}`}>{tag.title}</Link>
        </Tag>
      ))}
    </div>
  );
}
function App({ tagList, fetchTagList, categoryId, categoryTitle }) {
  useEffect(() => {
    fetchTagList(categoryId);
  }, [categoryId, fetchTagList]);
  return (
    <Tags tagList={tagList[categoryId] || []} categoryTitle={categoryTitle} />
  );
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
