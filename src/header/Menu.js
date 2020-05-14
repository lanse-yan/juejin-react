import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Menu mode="horizontal" selectedKeys="home">
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="activities">
          <Link to="/">沸点</Link>
        </Menu.Item>
        <Menu.Item key="issue">
          <Link to="/">话题</Link>
        </Menu.Item>
        <Menu.Item key="book">
          <Link to="/">小册</Link>
        </Menu.Item>
        <Menu.Item key="event">
          <Link to="/">活动</Link>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default App;
