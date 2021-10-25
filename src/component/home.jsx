import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
