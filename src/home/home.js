import React from 'react';

export default class Home extends React.Component {

    componentDidMount() {
        const code = document.createElement("code");
        const node = document.createTextNode(this.props.data);
        code.appendChild(node);
        document.getElementById("dom").appendChild(code);
    }

    render() {
        return (
            <p>this is my home</p>
        )

    }
}