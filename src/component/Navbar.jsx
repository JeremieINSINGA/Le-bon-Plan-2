import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                Lebonplan
                            </Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Admin">
                                            Admin
                                        </Link>
                                    </li>
                                </ul>
                                <a
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Ville
                                </a>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/cities/paris"
                                        >
                                            Paris
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/cities/lyon"
                                        >
                                            Lyon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/products/cities/marseille"
                                        >
                                            Marseille
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <Link className="nav-link" to="users/Login">
                                Login
                            </Link>
                            <Link className="nav-link" to="users/signup">
                                Sign Up
                            </Link>
                        </div>
                    </nav>
                </>
            </div>
        );
    }
}
