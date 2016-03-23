'use strict';
import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './landing';
import AboutUs from './aboutus';
import Advantages from './advantages';
import Team from './team';
import Press from './press';
import Contact from './contact';
import sass from 'css/master.scss';
import scrim from 'js/scrim.js'

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
				{scrim}
        return (
        	<div>
        	<nav className="navbar navbar-default navbar-fixed-top">
        	  <div className="container-fluid">
        	    <div className="navbar-header">
        	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        	        <span className="sr-only">Toggle navigation</span>
        	        <span className="icon-bar"></span>
        	        <span className="icon-bar"></span>
        	        <span className="icon-bar"></span>
        	      </button>
        	    </div>
        	    <div id="navbarboy" className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        	      <ul className="nav navbar-nav">
        	        <li><a href="#home">Home</a></li>
        	        <li><a href="#about">Overview</a></li>
        					<li><a href="#advantages">Advantages</a></li>
									<li><a href="#team">Team</a></li>
									<li><a href="#press">Press</a></li>
        					<li><a href="#contact">Contact</a></li>
        	      </ul>
        	    </div>
        	  </div>
        	</nav>
						<Landing />
        		<AboutUs />
						<Advantages />
						<Team />
						<Press />
						<Contact />
        	</div>
        	);
    }
}
