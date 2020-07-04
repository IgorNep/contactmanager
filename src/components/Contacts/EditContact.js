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
  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      });
  }
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

    const updContact = {
      name,
      email,
      phone,
    };
    const { id } = this.props.match.params;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(updContact),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "UPDATE_CONTACT", payload: data });
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
              <div className="card-header">Edit Contact</div>
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
                    value="Edit Contact"
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
