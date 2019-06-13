import React from "react";

function Friend(props) {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );

  if (!props.friends.length || !friend) {
    return <h2>Loading friend data...</h2>;
  }

  return (
    <div className="friend-wrapper">
      <p>{friend.name}</p>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
      <p>{friend.id}</p>

      <button
        onClick={event => props.setUpdateForm(event, friend)}
        className="md-button"
      >
        Update friend
      </button>

      <button
        onClick={event => props.deleteFriend(event, friend)}
        className="md-button"
      >
        Delete friend
      </button>
    </div>
  );
}

export default Friend;
