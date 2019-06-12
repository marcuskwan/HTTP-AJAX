import React, { Component } from "react";
import Friend from "./Friend";
import axios from "axios";

export class FriendList extends Component {
  state = {
    name: "",
    age: "",
    email: ""
  };
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addNewFriend = event => {
    event.preventDefault();
    const newFriend = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   error: err.response.message
        // });
      });
  };

  render() {
    const { friends } = this.props;
    return (
      <div className="friend-list">
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}

        <div class="form">
          <form>
            <input
              name="name"
              type="string"
              placeholder="name"
              onChange={this.handleChanges}
            />
            <input
              name="age"
              type="string"
              placeholder="age"
              onChange={this.handleChanges}
            />
            <input
              name="email"
              type="string"
              placeholder="email"
              onChange={this.handleChanges}
            />
          </form>
          <button onClick={this.addNewFriend}>Save</button>
        </div>
      </div>
    );
  }
}

export default FriendList;
