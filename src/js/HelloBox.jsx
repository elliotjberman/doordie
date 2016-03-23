import React, { Component } from 'react';
import Bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class HelloBox extends Component {
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
        				<div className="col-xs-12">
        					<h1>Westgate Health Campus</h1>
        					<h2>An Extraordinary Campus for Healthcare</h2>
        				</div>

        				<div className="col-xs-12 col-sm-8 col-md-6">
        					<p>
        						Westgate Health Campus is one of the largest comprehensive healthcare developments in the Southwest.
        						 With over 200,000 square feet of Class A office space organized in a unique five building circular configuration, it provides a thoroughly modern and integrated healthcare campus.
        						 Based in the burgeoning City of Glendale, it lies at the heart of metropolitan Phoenix, Arizona, and at the crossroads of the main Highway 101N and I-10 corridors.
        						 Within a short distance of the three largest health systems in Arizona, and proximity to major access including highways as well as Glendale Ave.,
        						 it is an ideal location for a transformative healthcare campus, and an economic engine for Glendale and the West Valley.
        						 Nearby are major entertainment and shopping venues to complement the campus which offers both condominium and rental space,
        						 organized about complementary points of patient care, as well as related areas of research and education, and supplemental retail and pharmacy.
        					</p>
        				</div>
        	</div>
        	);
    }
}
