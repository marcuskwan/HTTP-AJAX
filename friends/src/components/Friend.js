import React, { Component } from "react";

export default class Friend extends Component {
  render() {
    const { id, name, age, email } = this.props.friend;
    return (
      <div className="friend">
        <div>{id}</div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{email}</div>
      </div>
    );
  }
}
