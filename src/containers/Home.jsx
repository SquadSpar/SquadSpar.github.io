import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
// import '../../stylesheets/home.scss'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src="../../images/home.png" className="home-background" alt="background"/>
        <h1 className="welcome">Welcome to Squad Spur!</h1>
        <p>Pick your role</p>
        <Link to="/"><img src="../../images/student.png" alt="student icon"/></Link>
        <p>Student</p>
        <Link to="/"><img src="../../images/teacher.png" alt="teacher icon"/></Link>
        <p>Teacher</p>

        <Switch>
          <Route path="/" exact component={props => <Home />} />
        </Switch>

      </div>
    )
  }
}

export default Home;