import React, { Component } from 'react';
import sass from './styles.scss';

export default class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div id="contact" className="full-screen">
					<h1 className="header">Contact</h1>
					<div id="contact-container" className="col-sm-offset-1 col-sm-10 col-xs-12 padded-container">

						<div className="col-xs-12 col-md-6">
							<p className="contact-info">
								<b>TRISHA TALBOT</b><br/>
								Newmark Grubb Knight Frank<br/>
								Managing Director<br/>
								Global Healthcare Services<br/>
								602.952.3880<br/>
								<a href="mailto:ttalbot@ngkf.com">ttalbot@ngkf.com</a><br/>
							</p>
						</div>

						<div className="col-xs-12 col-md-6">
							<p className="contact-info">
								<b>KATHLEEN MORGAN</b><br/>
								Newmark Grubb Knight Frank<br/>
								Managing Director<br/>
								Global Healthcare Services<br/>
								602.952.3815<br/>
								<a href="mailto:kmorgan@ngkf.com">kmorgan@ngkf.com</a><br/>
							</p>
						</div>
					</div>
					<footer>
							<h1>
								&#169; 2016 101 W. Healthcare LLC<span><br/></span>
								NWC 99th Avenue and Glendale Avenue<span><br/></span>
								Glendale, AZ 85370
							</h1>
					</footer>
      	</div>);
    }
}
