import React from "react";
import Category from "../tag/Category";
import { Route, Switch } from "react-router-dom";
import Articles from "../articles";

function App() {
  return (
    <>
      <Category />
      <Switch>
        <Route path="/:categoryTitle">
          <Articles />
        </Route>
      </Switch>
    </>
  );
}

export default App;
