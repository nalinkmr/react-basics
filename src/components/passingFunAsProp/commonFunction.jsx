import React, { Component } from 'react'

export class commonFunction extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count : 0
        }
    }
    
    incrementCounter = () => {
        this.setState({ count : this.state.count + 1})
    }
    
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.incrementCounter)}
            </div>
        )
    }
}

export default commonFunction
