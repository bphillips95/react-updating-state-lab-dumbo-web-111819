// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    state = { 
        timesClicked: 0
    }
        clickfunc = () => { 
        this.setState(prevCount => ({
            timesClicked: prevCount.timesClicked+1 
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.clickfunc}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
