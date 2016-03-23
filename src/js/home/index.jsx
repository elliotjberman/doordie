import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AboutUs from './aboutus';

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div>
        	<nav className="navbar navbar-default" style={{backgroundColor: "#97D87F"}}>
        	  <div className="container-fluid">
        	    <div className="navbar-header">
        	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        	        <span className="sr-only">Toggl navigation</span>
        	        <span className="icon-bar"></span>
        	        <span className="icon-bar"></span>
        	        <span className="icon-bar"></span>
        	      </button>
        	      <a style={{color: "white !important"}} className="navbar-brand" href="#">Westgate Health Campus</a>
        	    </div>
        	    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        	      <ul style={{color: "white !important"}} className="nav navbar-nav">
        	        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
        	        <li><a style={{color: "white !important"}} href="#">Link</a></li>
        					<li><a style={{color: "white !important"}} href="#">Link</a></li>
        					<li><a style={{color: "white !important"}} href="#">Link</a></li>
        	      </ul>
        	    </div>
        	  </div>
        	</nav>
        		{AboutUs}
        	</div>
        	);
    }
}
