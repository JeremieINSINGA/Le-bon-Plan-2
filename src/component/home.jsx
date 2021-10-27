import React, { Component } from "react";
import { Link } from "react-router-dom";
import franceMap from "../public/img/francemap.png";
export default class Home extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1>Home</h1>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/products/cities/paris">Paris</Link>
                    </li>
                    <li>
                        <Link to="/products/cities/lyon">Lyon</Link>
                    </li>
                    <li>
                        <Link to="/products/cities/marseille">Marseille</Link>
                    </li>
                </ul>
                <img className="col-4" src={franceMap} alt="France Map" />
            </div>
        );
    }
}
