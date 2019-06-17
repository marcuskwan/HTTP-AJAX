import React from "react";

class Form extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: "",
      id: ""
    }
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friend: this.props.activeFriend
      });
    }
  }

  changeHandler = event => {
    event.persist();

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [event.target.name]: event.target.value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: "",
        age: "",
        email: "",
        id: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Add New friend</h2>
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
            type="string"
            name="id"
            onChange={this.changeHandler}
            placeholder="id"
            value={this.state.friend.id}
          />
          <div className="baseline" />

          <button className="md-button form-button">Add New friend</button>
        </form>
      </div>
    );
  }
}

export default Form;
