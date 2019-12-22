import React, { Component } from 'react'
// import '../../stylesheets/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src="../../images/home.png" className="home-background"/>
        <h1 className="welcome">Welcome to Squad Spur!</h1>
        <p>Pick your role</p>
        <img src="../../images/student.png"/>
        <button>STUDENT</button>
        <img src="../../images/teacher.png"/>
        <button>TEACHER</button>
      </div>
    )
  }
}

export default Home;