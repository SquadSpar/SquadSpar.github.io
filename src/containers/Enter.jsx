import React, { Component } from "react";
// import '../../stylesheets/Enter.scss'

class Enter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      roomCode: ""
    };
  }
  myChangeHandler = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Form>
        <h1>Hello </h1>
        <p>Enter username:</p>
        <input type="text" name="userName" onChange={this.myChangeHandler} />
        <p>Enter room code:</p>
        <input type="text" name="roomCode" onChange={this.myChangeHandler} />
      </Form>
    );
  }
}

export default Enter;
