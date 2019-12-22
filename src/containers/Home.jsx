import React, { Component } from "react";
import { Link } from "react-router-dom";

// Project Components
import StyledButton from "../Components/StyledButton";

import "../stylesheets/home.scss";
// import '../../stylesheets/home.scss'

class Home extends Component {
  render() {
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
        <Link to="/">
          <img src="../../images/student.png" alt="student icon" />
        </Link>
        <p>Student</p>
        <Link to="/">
          <img src="../../images/teacher.png" alt="teacher icon" />
        </Link>
        <p>Teacher</p>
      </div>
    );
  }
}

export default Home;
