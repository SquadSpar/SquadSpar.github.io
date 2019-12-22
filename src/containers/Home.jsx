import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
          <img src="../../images/home.png" className="home-background" alt="background"/>
        <div className="welcome-page">  
            <h1 className="welcome">Welcome to Squad Spur!</h1>
                <p class="pick-role">Pick your role</p>
            <div className="roles">
                <Link to="/"><img src="../../images/student.png" className="options" alt="student icon"/></Link>
                <Link to="/"><img src="../../images/teacher.png" className="options" alt="teacher icon"/></Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;