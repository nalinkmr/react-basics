import React, { Component } from 'react'
import App from '../App.js';

export default class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticktick: 0
        }
    }

    render() {
        // const array = this.props.array;
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };

        return (
            <>
                <div style={mystyle}>{this.props.display}</div>
                <br></br>
                <button onClick={() => this.setState({ ticktick: this.state.ticktick + 1 })}>+</button>
                {this.state.ticktick}

                <button onClick={() => this.setState({ ticktick: this.state.ticktick - 1 })}>-</button>
                {/* <button onClick={() => this.setState({ticktick : this.state.ticktick + 1})}>start tick tick</button> */}
                <hr></hr>
            </>
        )
    }
}
