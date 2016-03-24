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

						<div className="col-xs-12 col-sm-4">
							<p className="contact-info">
								TRISHA TALBOT<br/>
								Newmark Grubb Knight Frank<br/>
								Managing Director<br/>
								Global Healthcare Services<br/>
								602.952.3880<br/>
								ttalbot@ngkf.com<br/>
							</p>
						</div>

						<div className="col-xs-12 col-sm-4">
							<p className="contact-info">
								KATHLEEN MORGAN<br/>
								Newmark Grubb Knight Frank<br/>
								Managing Director<br/>
								Global Healthcare Services<br/>
								602.952.3815<br/>
								kmorgan@ngkf.com<br/>
							</p>
						</div>

						<div className="col-xs-12 col-sm-4">
							<p className="contact-info">
								GARTH HOGAN<br/>
								Newmark Grubb Knight Frank<br/>
								Executive Managing Director<br/>
								Global Healthcare Services<br/>
							</p>
						</div>

					</div>

        	</div>);
    }
}
