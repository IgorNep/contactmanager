import React, { Component } from "react";
import TextInputGroup from "../Layout/TextInputGroup";
import { Consumer } from "../../context";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (dispatch) => {
    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      name,
      email,
      phone,
    };
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "ADD_CONTACT", payload: data });
      });

    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    placeholder="Enter name"
                    label="Name"
                    value={name}
                    name="name"
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    placeholder="Enter email"
                    label="Email"
                    value={email}
                    name="email"
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    placeholder="Enter phone"
                    label="Phone"
                    value={phone}
                    name="phone"
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn bg-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
