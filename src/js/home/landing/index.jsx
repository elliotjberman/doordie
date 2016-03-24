import React, { Component } from 'react';
import sass from './styles.scss';
import logo from 'img/logo.png'

export default class Press extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div id="home" className="full-screen">
								<div id="overlay">

									{/*<div className="col-xs-12">
											<div className="col-xs-12 col-sm-3">
												<img id="logo" src={logo} />
											</div>
											<div className="col-xs-12 col-sm-8 col-sm-offset-1">
												<h1 id="company-name">Westgate Healthcare Campus</h1>
												<h2 id="landing-text-box">An Extraordinary Campus for Healthcare</h2>
											</div>
										</div>
										*/}

									<div className="col-xs-12 col-sm-8 col-sm-offset-2">
										<img id="logo" src={logo} />
										<h1 id="company-name">Westgate Healthcare Campus</h1>
										<h2 id="landing-text-box">An Extraordinary Campus for Healthcare</h2>
										</div>


								</div>
              </div>
                );
    }
}
