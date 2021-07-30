import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link }  from 'react-router-dom';
import Home from './home/home';

export default class router extends Component {
    render() {
        return (
            <Router>
                <Link to="/home"></Link>
                <Route path="/home" component={Home} />
                <Home />
            </Router>
        )
    }
}
