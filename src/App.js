import React from "react";
// import logo from './logo.svg';
import Home from "./containers/Home";
import Room from "./containers/Room";

import "./App.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/room/:number" render={props => <Room {...props} />} />


    </Switch>
  );
}

export default App;
