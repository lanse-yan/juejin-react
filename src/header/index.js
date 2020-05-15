import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Menu from "./Menu";
import Search from "./Search";
import Submit from "./Submit";
import Auth from "./Auth";
import AddArticle from "./AddArticle";
import Notification from "./Notification";
import UserMenu from "./UserMenu";

const loginNav = (
  <>
    <AddArticle />
    <Notification />
    <UserMenu />
  </>
);

const notLoginNav = (
  <>
    <Submit />
    <Auth />
  </>
);

function App() {
  const [isLogin] = useState(false);
  return (
    <div className="main-header visible">
      <div className="container">
        <a href="/" className="logo">
          <img src={logo} className="logo-img" alt="logo" />
        </a>
        <Menu />
        <Search />
        {isLogin ? loginNav : notLoginNav}
      </div>
    </div>
  );
}

export default App;
