import React from "react";

function FriendsList(props) {
  function routeTofriend(event, friend) {
    event.preventDefault();
    props.history.push(`/friend-list/${friend.id}`);
  }
  return (
    <div className="friends-list-wrapper">
      {props.friends.map(friend => (
        <div
          onClick={event => routeTofriend(event, friend)}
          className="friend-card"
          key={friend.id}
        >
          <p>{friend.name}</p>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          <p>{friend.id}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
