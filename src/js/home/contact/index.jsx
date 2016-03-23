import React, { Component } from 'react';
import sass from './styles.scss';

export default class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div id="contact" className="full-screen">
					<h1 id="contact-header">Contact</h1>
					<div id="contact-container" className="col-sm-offset-1 col-sm-10 col-xs-12">
						<div className="col-xs-6 col-sm-3">
							<p className="contact-info">
								TRISHA TALBOT<br/>
								Managing Director<br/>
								602.952.3880<br/>
								ttalbot@ngkf.com<br/>
							</p>
						</div>
						<div className="col-xs-6 col-sm-3">
							<p className="contact-info">
								TRISHA TALBOT<br/>
								Managing Director<br/>
								602.952.3880<br/>
								ttalbot@ngkf.com<br/>
							</p>
						</div>
						<div className="col-xs-6 col-sm-3">
							<p className="contact-info">
								TRISHA TALBOT<br/>
								Managing Director<br/>
								602.952.3880<br/>
								ttalbot@ngkf.com<br/>
							</p>
						</div>
						<div className="col-xs-6 col-sm-3">
							<p className="contact-info">
								TRISHA TALBOT<br/>
								Managing Director<br/>
								602.952.3880<br/>
								ttalbot@ngkf.com<br/>
							</p>
						</div>
					</div>

        	</div>);
    }
}
