import React, { Component } from 'react'

export default class Welcome extends Component {
    
    handleEvent(){
        console.log('frotm class')
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleEvent}>parent welcome</button>
            </div>
        )
    }
}
