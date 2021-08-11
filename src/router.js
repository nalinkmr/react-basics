import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import List from './home/list';
import Counter from './todo/counter'

export default class router extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={List} />
                        <Route path="/home" component={Home} />
                        <Route path="/list" component={List} />
                        <Route path="/todo/counter" component={Counter} />
                    </Switch>
                </Router>
            </>
        )
    }
}
