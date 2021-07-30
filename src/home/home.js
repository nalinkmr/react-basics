import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoFunctional from "../todo/todoListFunctional"
import TodoListClass from "../todo/todoListClass"
import LifeCycleUsingFunc from "../todo/life-cycle-function"
import LifeCycleUsingClass from "../todo/life-cycle-class"
import ApiClass from "../api/api"

export default class Home extends React.Component {

    componentDidMount() {
        const code = document.createElement("code");
        const node = document.createTextNode(this.props.data);
        code.appendChild(node);
        document.getElementById("dom").appendChild(code);
    }

    render() {
        return (
            <Router>
                <div id="dom"></div>
                <Link to="/todo/todoFunctional">todofunctionalClass</Link>
                <br></br><br></br>
                <Link to="/todo/todoListClass">todolistClass</Link>
                <br></br><br></br>
                <Link to="/todo/LifeCycleUsingClass">LifeCycleUsingClass</Link>
                <br></br><br></br>
                <Link to="/">LifeCycleUsingFunc</Link>
                <br></br><br></br>
                <Link to="/api/getApi">api Testing</Link>
                <br></br><br></br>
                <Route exact path="/" component={LifeCycleUsingFunc} />
                <Route path="/todo/todoFunctional" component={TodoFunctional} />
                <Route path="/todo/todoListClass" component={TodoListClass} />

                <Route path="/todo/LifeCycleUsingClass" component={LifeCycleUsingClass} />

                <Route path="/api/getApi" component={ApiClass} />

            </Router>
        )

    }
}