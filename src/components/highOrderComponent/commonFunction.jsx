import React, { Component } from 'react'

const functionName = (OriginalComponent) =>{
    class commonFunction extends Component {
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
                <OriginalComponent count={this.state.count} incrementCounter={this.incrementCounter} />
            )
        }
    }
    return commonFunction
}

export default functionName


