import React, { Component } from "react";
import axios from 'axios'

export default class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            avatar: {},
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.avatar.files[0]);
        const form = e.target;
        const formData = new FormData();
        formData.append("firstName", this.state.firstName);
        formData.append("avatar", this.state.avatar);
        axios
            .post("http://localhost:3001/users/signup", formData)
            .then((res) => console.log(res))
            .catch((e) => console.log(e));
    }
    render() {
        return (
            <div className="col-5 my-5 mx-auto">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="p-2" htmlFor="first-name">
                            First Name
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ firstName: e.target.value });
                            }}
                            type="text"
                            className="border border-grey rounded p-2"
                            id="firstName"
                            placeholder="First Name"
                            required
                        />
                        <label className="p-2" htmlFor="last-name">
                            Last Name
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ lastName: e.target.value });
                            }}
                            type="text"
                            className="border border-grey rounded p-2"
                            id="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="p-2" htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ email: e.target.value });
                            }}
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            required
                        />
                        <small
                            id="emailHelp"
                            className="form-text text-muted p-2"
                        >
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label className="p-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ username: e.target.value });
                            }}
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="form-group"></div>
                    <div className="form-group">
                        <label
                            className="p-2"
                            htmlFor="exampleInputPassword1"
                            required
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }}
                            name="password"
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label mr-4" htmlFor="avatar">
                            Upload your Picture
                        </label>
                        <input
                            onChange={(e) => {
                                this.setState({ avatar: e.target.files[0] });
                            }}
                            className="form-control"
                            type="file"
                            name="avatar"
                            id="avatar"
                        />
                    </div>
                    <div className="form-check my-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            required
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
