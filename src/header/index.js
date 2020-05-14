import React from "react";
import logo from "../logo.svg";
import Menu from "./Menu";
import Search from "./Search";
import Submit from "./Submit";
import Auth from "./Auth";

function App() {
  return (
    <div className="main-header visible">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} className="logo-img" alt="logo" />
        </a>
        <Menu />
        <Search />
        <Submit />
        <Auth />
      </div>
    </div>
  );
}

export default App;
