import React, { useState, useEffect } from "react";
import { Menu, Popover, Tag } from "antd";
import { Link } from "react-router-dom";
import api from "../api/category";

const tags = (
  <div className="tag-list">
    <Tag>test1</Tag>
    <Tag>test1</Tag>
    <Tag>test1</Tag>
    <Tag>test1</Tag>
    <Tag>test1</Tag>
    <Tag>test1</Tag>
  </div>
);

function TagPop(categoryId) {
  return <div>ssss</div>;
}

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
            <Popover placement="bottomLeft" content={tags}>
              <Link to="/">推荐</Link>
            </Popover>
          </Menu.Item>
          {categoryList.map((category) => (
            <Menu.Item key={category.title}>
              <Popover
                placement="bottomLeft"
                content={<TagPop categoryId={category.id} />}
              >
                <Link to={`/${category.title}`}>{category.name}</Link>
              </Popover>
            </Menu.Item>
          ))}

          {/* <Menu.Item key="backend">
            <Link to="/">后端</Link>
          </Menu.Item>
          <Menu.Item key="front">
            <Link to="/">前端</Link>
          </Menu.Item>
          <Menu.Item key="android">
            <Link to="/">Android</Link>
          </Menu.Item>
          <Menu.Item key="ios">
            <Link to="/">iOS</Link>
          </Menu.Item>
          <Menu.Item key="ai">
            <Link to="/">人工智能</Link>
          </Menu.Item>
          <Menu.Item key="ide">
            <Link to="/">开发工具</Link>
          </Menu.Item>
          <Menu.Item key="code">
            <Link to="/">代码人生</Link>
          </Menu.Item>
          <Menu.Item key="reading">
            <Link to="/">阅读</Link>
          </Menu.Item> */}
        </Menu>
      </div>
    </nav>
  );
}

export default App;
