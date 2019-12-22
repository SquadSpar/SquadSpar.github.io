import React, { Component } from "react";
import { Link } from "react-router-dom";

// Project Components
import StyledButton from "../Components/StyledButton";
import BackgroundWithOverlay from "../Components/BackgroundWithOverlay";

import "../stylesheets/home.scss";
// import '../../stylesheets/home.scss'
import axios from "axios";
class Home extends Component {
  createRoom = () => {
    //axios.post('/createRoom').then(res=>{ //Get endpoint from Neil
    this.props.history.push("/newRoomPage");
    //})
  };

  joinRoom = () => {
    let roomNumber = prompt("whats your room number?");
    console.log(roomNumber);
    //axios.post('/joinRoom').then(res=>{ //Get endpoint from Neil
    this.props.history.push(`/room/${roomNumber}`);
    //})
  };

  render() {
    console.log(this);
    return (
      <div className="home">
        <BackgroundWithOverlay imgUrl="home.png" alpha=".6" />
        <h1 className="welcome">Welcome to Squad Spur!</h1>
        <p>Pick your role</p>
        <Link to="/">
          <img src="../../images/student.png" alt="student icon" />
        </Link>
        <StyledButton
          title="STUDENT | Join Room"
          onClickFunction={this.joinRoom}
        />

        <Link to="/">
          <img src="../../images/teacher.png" alt="teacher icon" />
        </Link>
        <StyledButton
          title="TEACHER | Create Room"
          onClickFunction={this.createRoom}
        />
      </div>
    );
  }
}

export default Home;
