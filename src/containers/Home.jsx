import React, { Component } from 'react'
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
        <button onClick={this.joinRoom} >STUDENT | Join Room</button>
        <button onClick={this.createRoom}>TEACHER | Create Room</button>
      </div>
    )
  }
}

export default Home;