import React, { Component } from "react";
import { Link } from "react-router-dom";

// Project Components
import StyledButton from "../components/StyledButton";
import BackgroundWithOverlay from "../components/BackgroundWithOverlay";

import "../stylesheets/home.scss";
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
        <div className="pick-role">
            <div className="roles">
                <div className="role-links">
                        <Link to="/">
                        <img src="../../images/student.png" className="options" alt="student icon" />
                        </Link>
                        <button onClick={this.joinRoom} >Join Room</button>
                </div>
                    <div className="role-links">
                        <Link to="/">
                        <img src="../../images/teacher.png" className="options" alt="teacher icon" />
                        </Link>
                        <button onClick={this.createRoom}>Create Room</button>
                </div>
            </div>
        </div>
        {/* <Link to="/">
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
        /> */}
      </div>
    );
  }
}

export default Home;
