import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Admin from "./component/Admin";
import Home from "./component/home";
import ProductPage from "./component/ProductPage";
import Paris from "./cities/paris";
import Lyon from "./cities/lyon";
import Marseille from "./cities/marseille";
import Error404 from "./component/error404";
import Login from "./component/Login";
import SignUp from "./component/Signup";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/" component={Home} />
                    <Route path="/products/cities/Paris" component={Paris} />
                    <Route path="/products/cities/Lyon" component={Lyon} />
                    <Route path="/products/product/ProductPage" component={ProductPage} />
                    <Route
                        path="/products/cities/Marseille"
                        component={Marseille}
                    />
                    <Route path="*" component={Error404} />
                </Switch>
            </BrowserRouter>
        );
    }
}
