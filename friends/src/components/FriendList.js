import React, { Component } from "react";
import Friend from "./Friend";


export class FriendList extends Component {
  
  render() {
    const { friends } = this.props;
    return (
      <div className="friend-list">
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </div>
    );
  }
}

export default FriendList;
