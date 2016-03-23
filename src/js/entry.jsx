import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import Home from './home';

render((
    <Router history={browserHistory} >
    	<Route path="/" component={Home}/>
    </Router>), document.getElementById('root'));
