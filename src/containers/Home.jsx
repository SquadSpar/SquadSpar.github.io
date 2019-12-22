import React, { Component } from "react";
import { Link } from "react-router-dom";

// Project Components
import StyledButton from "../components/StyledButton";

import "../stylesheets/home.scss";
// import '../../stylesheets/home.scss'
import axios from 'axios'
class Home extends Component {

  createRoom = () => {
    //axios.post('/createRoom').then(res=>{ //Get endpoint from Neil 
      this.props.history.push('/newRoomPage')
    //})
  } 

  joinRoom = () => {
    let roomNumber = prompt('whats your room number?')
    console.log(roomNumber)
    //axios.post('/joinRoom').then(res=>{ //Get endpoint from Neil 
      this.props.history.push(`/room/${roomNumber}`)
    //})    

  }

  render() {
    console.log(this)
    return (
      <div className="home">
        {/* <StyledButton title="Student" />
        <button>TEACHER</button> */}
        <img
          src="../../images/home.png"
          className="home-background"
          alt="background"
        />
        <h1 className="welcome">Welcome to Squad Spur!</h1>
        <p>Pick your role</p>
        <div className="pick-role">
            <div className="roles">
                <Link to="/">
                <img src="../../images/student.png" className="options" alt="student icon" />
                </Link>
                <button onClick={this.joinRoom} >STUDENT | Join Room</button>
                <Link to="/">
                <img src="../../images/teacher.png" className="options" alt="teacher icon" />
                </Link>
                <button onClick={this.createRoom}>TEACHER | Create Room</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
