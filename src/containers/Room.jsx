import React, { Component } from 'react'
import Axios from 'axios'

export default class Room extends Component {

    state = {
        timer: 60, 
        links : [`https://codewars.com/2984698246589`]
    }

    componentDidMount(){
        //Axios.get(`/room/${tjhis.props.match.params.number}`) //Get endpoint from neil setState with new links 
        this.startTimer()
    }


    startTimer = () => {
        setInterval(()=>{
            this.setState({
                timer:this.state.timer-1
            })
        },1000)

    }

    render() {
        return (
            <div> 

                {this.state.links}
                {this.state.timer}
                Room {this.props.match.params.number}
            </div>
        )
    }
}
