import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
