import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick = (dispatch, id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
      });
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h2>
                {name}
                <i
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    this.setState({ showContactInfo: !showContactInfo })
                  }
                ></i>
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, dispatch, id)}
                ></i>
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fa fa-pencil"
                    style={{
                      cursor: "pointer",
                      color: "black",
                      float: "right",
                      marginRight: "10px",
                    }}
                  ></i>
                </Link>
              </h2>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email:{email}</li>
                  <li className="list-group-item">Phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
