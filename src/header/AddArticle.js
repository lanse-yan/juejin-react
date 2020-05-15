import React from "react";
import { Dropdown, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const articelMenu = (
  <Menu>
    <Menu.Item>发布沸点</Menu.Item>
    <Menu.Item>分享链接</Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="nav-item add">
      <Dropdown.Button
        type="primary"
        size="middle"
        overlay={articelMenu}
        icon={<CaretDownOutlined />}
      >
        写文章
      </Dropdown.Button>
    </div>
  );
}
export default App;
