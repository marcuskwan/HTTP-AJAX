import React from "react";

function Home(props) {
  const routeToFriendList = event => {
    event.preventDefault();
    props.history.push("/friend-list");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={routeToFriendList} className="md-button shop-button">
        See Friends
      </button>
    </div>
  );
}

export default Home;
