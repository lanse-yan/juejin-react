import React from "react";
// import logo from "./logo.svg";
import "./App.scss";
import Header from "./header";
import Home from "./home";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./common/rootReducer";
import { createStore, applyMiddleware } from "redux";

const middleware = [thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <div className="container">
            <div className="main-header-box">
              <Header />
            </div>
            <div className="container main-container">
              <Home />
            </div>
          </div>
        </Provider>
      </Router>
    </>
  );
}

export default App;
