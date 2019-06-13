// import React and Component so we can use state and render methods
import React, { Component } from "react";
// import axios so we can use it to add data to the server
import axios from "axios";

export default class Friend extends Component {
  // --- update state here
  state = {}
  // updateFriend
  updateFriend = friendID => {
    const updatedFriend = {
      // ----update state here setting name,age,email to what's on state
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    // putting updatedFriend to server data
    axios
      .put(`"http://localhost:5000/friends/${friendID}"`, updatedFriend)
      // what to do if resolved..
      .then(result => {
        console.log(result);
      })
      // what to do if it isn't..
      .catch(err => {
        console.log(err);
      });
    // setting state values back to empty strings
      this.setState({
      name: "",
      age: "",
      email: ""
    });
  };

  // delete friend
  deleteFriend = friendID => {
    axios.delete(`"http://localhost:5000/friends/${friendID}"`);
  };

  render() {
    // destructuring id,name,age,email to make it cleaner
    // update button
    // delete button 
    const { id, name, age, email } = this.props.friend;
    return (
      <div className="friend">
        <div>{id}</div>
        <div>{name}</div>
        <div>{age}</div>
        <div>{email}</div>
        <button onClick={() => this.updateFriend(id)}> Update</button>
        <button onClick={() => this.deleteFriend(id)}> Delete </button>
      </div>
    );
  }
}
