import React, { useState, useEffect } from "react";
import { Menu, Popover } from "antd";
import { Link } from "react-router-dom";
import api from "../api/category";
import Tags from "./tags";

function App() {
  const [categoryList, setCategoryList] = useState([]);

  // 只需要再mount的时候执行一次即可，不依赖prop或state
  useEffect(() => {
    api.categories().then(({ d }) => {
      setCategoryList(d.categoryList);
    });
  }, []);

  return (
    <nav className="view-nav">
      <div className="nav-list">
        <Menu
          mode="horizontal"
          selectedKeys="recommand"
          style={{ borderBottom: "none" }}
        >
          <Menu.Item key="recommand">
            <Link to="/">推荐</Link>
          </Menu.Item>
          {categoryList.map((category) => (
            <Menu.Item key={category.title}>
              <Popover
                placement="bottomLeft"
                content={<Tags categoryId={category.id} />}
              >
                <Link to={`/${category.title}`}>{category.name}</Link>
              </Popover>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </nav>
  );
}

export default App;
