import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
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
      });

    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };
    
    updateFriend = friendID => {
        const updatedFriend = {
          name: this.state.name,
          age: this.state.age,
          email: this.state.email
        };

        axios
      .put(`"http://localhost:5000/friends/${friendID}"`, updatedFriend)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      name: "",
      age: "",
      email: ""
    });
  };
    }

  render() {
    return (
      <div className="form">
        <form>
          <input
            name="name"
            type="string"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            name="age"
            type="string"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            name="email"
            type="string"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChanges}
          />
        </form>
            <button onClick={this.addNewFriend}>Save</button>
      </div>
    );
  }
}
