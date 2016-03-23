import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import HelloBox from './HelloBox';

render((
    <Router history={browserHistory} >
    	<Route path="/" component={HelloBox}/>
    </Router>), document.getElementById('root'));