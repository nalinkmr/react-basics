import React, { Component } from 'react'
import functionName from './commonFunction'

export class incrementCounter extends Component {
    render() {
        const  {count , incrementCounter}  = this.props;
        return (
            <div>
                <button onClick={incrementCounter}>your number is {count}</button>
            </div>
        )
    }
}

export default functionName(incrementCounter)
