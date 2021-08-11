import React, { Component } from 'react'

export class input extends Component {

    constructor(props) {
        super(props)
        this.currChild = React.createRef();
    }

    focusInput = () =>{
        this.currChild.current.focus();
    }

 
    
    render() {
        return (
            <div>
                <input type="text" ref={this.currChild}/>
            </div>
        )
    }
}

export default input
