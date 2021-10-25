import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./component/Navbar";
import Admin from "./component/Admin";
import Home from "./cities/home";
import Paris from "./cities/paris";
import Lyon from "./cities/lyon";
import Marseille from "./cities/marseille";
import Error404 from "./cities/error404";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/" component={Home} />
          <Route path="/Paris" component={Paris} />
          <Route path="/Lyon" component={Lyon} />
          <Route path="/Marseille" component={Marseille} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}
