import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
function App() {
  return (
    <div className="nav-item search">
      <Input
        placeholder="搜索掘金"
        suffix={<SearchOutlined />}
        className="search-input"
        size="middle"
      />
    </div>
  );
}

export default App;
