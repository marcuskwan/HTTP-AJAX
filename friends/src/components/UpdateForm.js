import React from "react";

class UpdateForm extends React.Component {
  state = {
    friend: this.props.activeFriend
  };

  changeHandler = event => {
    event.persist();

    this.setState(preventState => ({
      friend: {
        ...preventState.friend,
        [event.target.name]: event.target.value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateFriend(this.state.friend);
  };

  render() {
    return (
      <div>
        <h2>Update Friend</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.friend.name}
          />
          <div className="baseline" />

          <input
            type="number"
            name="age"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.friend.age}
          />
          <div className="baseline" />

          <input
            type="string"
            name="email"
            onChange={this.changeHandler}
            placeholder="email"
            value={this.state.friend.email}
          />
          <div className="baseline" />

          <input
            type="number"
            name="id"
            onChange={this.changeHandler}
            placeholder="Shipping"
            value={this.state.friend.id}
          />
          <div className="baseline" />

          <button className="md-button form-button">Update friend</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
