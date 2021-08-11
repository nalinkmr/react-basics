import React, { Component } from 'react'
import Input from './input'

export class parentInpu extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        console.log(this.inputRef);
       // this.inputRef.current.focus();
        this.inputRef.current.focusInput();
    }

    render() {
        return (
            <div>
                {console.log('parent')}
                {this.props.render(false)}
                <Input ref={this.inputRef} />
                <br></br>
                <button onClick={this.clickHandler} >focus me</button>
            </div>
        )
    }
}

export default parentInpu
