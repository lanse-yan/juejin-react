import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="main-header-box">
            <Header />
          </div>
          <div className="container main-container">
            <Home />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
