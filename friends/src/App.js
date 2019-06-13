import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendsList";
import Form from "./components/Form";
import axios from "axios";
import Home from "./components/Home";
import Friend from "./components/Friend";
import UpdateForm from "./components/UpdateForm";
import { Route, NavLink } from "react-router-dom";

export default class App extends Component {
  state = {
    friends: [],
    activeFriend: null
  };

  componentDidMount() {
    // gets data
    axios
      .get("http://localhost:5000/friends")
      .then(result => {
        console.log("result in App", result);
        this.setState({ friends: result.data });
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   error: err.response.message
        // });
      });

    //     this.setState({ friends: data });
  }
  // addFriend fn
  addFriend = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends-list");
      })
      .catch(err => console.log(err));
  };
  // updateForm fn
  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({ activeFriend: friend });
    this.props.history.push("/update-form");
  };
  // updateFriend fn
  updateFriend = friend => {
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends-list");
      })
      .catch(err => console.log(err));
  };
  // deleteFriend
  deleteFriend = (event, friend) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friend.id}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push("/friends-list");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="friend-header">Marcus's Friends</h1>
          <div className="nav-links">
            <NavLink exact to="/form">
              Add Friend
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/friends-list">Friend List</NavLink>
          </div>
        </nav>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/friends-list"
          render={props => (
            <FriendsList
              {...props} // this is the same as below
              //               match={props.match}
              //               history={props.history}
              //               location={props.location}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/friend-list/:id"
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              setUpdateForm={this.setUpdateForm}
              friends={this.state.friends}
            />
          )}
        />
        <Route
          path="/form"
          render={props => <Form {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/update-form"
          render={props => (
            <UpdateForm
              {...props}
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
      </div>
    );
  }
}
