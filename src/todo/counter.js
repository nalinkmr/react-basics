import React, { Component } from 'react'
import TodoListUsingClass from './todoListUsingClass'

export default class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticktick: 0
        }
    }

    render() {
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
                <button style={mystyle} onClick={() => this.setState({ ticktick: this.state.ticktick + 1 })}>+</button>

                {this.state.ticktick}

                <button style={mystyle} onClick={() => this.setState({ ticktick: this.state.ticktick - 1 })}>-</button>
                <hr></hr>
                <TodoListUsingClass />
            </>
        )
    }
}
