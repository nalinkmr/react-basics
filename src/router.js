import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Counter from './todo/counter'
import Header from './header/header'

export default class router extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/header" component={Header} />
                        <Route path="/todo/counter" component={Counter} />
                    </Switch>
                </Router>
            </>
        )
    }
}
