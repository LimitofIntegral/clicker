import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Shop from "./Shop";
import React from "react";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shop" component={Shop} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
