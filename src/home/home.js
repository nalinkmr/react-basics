import React from 'react';
import { Button } from '@material-ui/core';


export default class home extends React.Component {

    state = {
        count: 0,
        list: [
            '2'
        ],
    }

    counter() {
        const { count } = this.state; // destructuring of an object
        return (
            count === 0 ? <span>zero</span> : count
        );
    }

    renderClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "info";
        return classes;
    }

    // render tags
    tagsRender(){
        return  this.state.list.length === 0 ? <p>notags available</p> : <ul>{this.state.list.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() {
        return (
            <>
                <div>
                    {this.props.children}
                    {this.state.list.length === 0 && 'create tags'}
                    {this.tagsRender()}
                    <span className={this.renderClass()}>{this.counter()}</span>
                    <Button onClick={() => this.setState({ count: this.state.count + 1 })}>+</Button>
                </div>
            </>
        );
    }
}