import React, { useState, useEffect } from "react";
import api from "../api/category";
import { Tag } from "antd";

export function Tags({ tagList }) {
  return (
    <div className="tag-list">
      {tagList.map((tag) => (
        <Tag key={tag.tagId}>{tag.title}</Tag>
      ))}
    </div>
  );
}

function App({ categoryId }) {
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    api.tags(categoryId).then((resp) => {
      setTagList(resp.data);
    });
  }, [categoryId]);
  return <Tags tagList={tagList} />;
}

export default App;
