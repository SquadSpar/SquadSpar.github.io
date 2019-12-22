import React, { Component } from "react";

// Project Components
import StyledButton from "../Components/StyledButton";

// import '../../stylesheets/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <StyledButton title="Student" />
        <button>TEACHER</button>
      </div>
    );
  }
}

export default Home;
