import React from "react";
import Category from "../tag/Category";
import { Route, Switch } from "react-router-dom";
import Articles from "../articles";
import ArticleTagNav from "../tag/ArticleTagNav";
import Aside from "../aside";

function App() {
  return (
    <>
      <Category />
      <div className="view">
        <Switch>
          <Route path="/:categoryTitle/:tagTitle?">
            <ArticleTagNav />
            <div className="article-context">
              <Articles />
              <Aside />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
