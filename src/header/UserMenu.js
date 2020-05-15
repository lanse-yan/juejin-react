import React from "react";
import { Dropdown, Menu } from "antd";
import {
  EditOutlined,
  FileTextOutlined,
  UserOutlined,
  LikeOutlined,
  StarOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  SettingOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import user from "../assets/user.jpg";

const userMenu = (
  <Menu>
    <Menu.Item icon={<EditOutlined />}>写文章</Menu.Item>
    <Menu.Item icon={<FileTextOutlined />}>草稿</Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<UserOutlined />}>我的主页</Menu.Item>
    <Menu.Item icon={<LikeOutlined />}>我赞过的</Menu.Item>
    <Menu.Item icon={<StarOutlined />}>我的收藏集</Menu.Item>
    <Menu.Item icon={<ShoppingCartOutlined />}>已购</Menu.Item>
    <Menu.Item icon={<TagOutlined />}>标签管理</Menu.Item>
    <Menu.Divider />
    <Menu.Item icon={<SettingOutlined />}>设置</Menu.Item>
    <Menu.SubMenu title="关于" icon={<InfoCircleOutlined />}>
      <Menu.Item>下载应用</Menu.Item>
      <Menu.Item>关于</Menu.Item>
      <Menu.Item>加入我们</Menu.Item>
      <Menu.Item>翻译计划</Menu.Item>
      <Menu.Item>合作伙伴</Menu.Item>
    </Menu.SubMenu>
    <Menu.Divider />
    <Menu.Item icon={<LogoutOutlined />}>登出</Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="nav-item user">
      <Dropdown overlay={userMenu} trigger={["click"]}>
        <img src={user} alt="img" className="user-img" />
      </Dropdown>
    </div>
  );
}

export default App;
