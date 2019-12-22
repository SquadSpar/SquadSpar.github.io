import React from "react";
// import logo from './logo.svg';
import Home from "./containers/Home";
import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home />} />
    </Switch>
  );
}

export default App;
