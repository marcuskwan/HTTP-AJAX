import React, { Component } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import Form from "./components/Form";
import axios from "axios";

export default class App extends Component {

  state = {
    friends: []
  };

  componentDidMount() {
    // gets data
    axios
      .get("http://localhost:5000/friends")
      .then(result => {
        console.log("result in App",result);
        this.setState({ friends: result.data });
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   error: err.response.message
        // });
      });

    //     this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <Form />
      </div>
    );
  }
}
