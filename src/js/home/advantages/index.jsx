import React, { Component } from 'react';
import sass from './styles.scss';

export default class Advantages extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        	<div id="advantages" className="full-screen">
						<div className="col-xs-12 col-sm-10 col-sm-offset-1 padded-container">
							<h1 className='header'>Advantages</h1>
							
							<p className="advantage-explanation"><span className="advantage-name">Location </span><br/>
							Ideal between the established central core of Phoenix and the booming West Valley, with a highly prized work force and growing patient base.
							</p><br/>
						<p className="advantage-explanation"><span className="advantage-name">Design </span><br/>
							Integrated campus environment designed for ease of access and movement, comfort, and efficient function, beyond typical medical office buildings.
							</p><br/>
						<p className="advantage-explanation"><span className="advantage-name">Opportunity </span><br/>
							Unlike many campuses, Westgate Healthcare Campus is unfettered by any restrictions from any of the nearby healthcare systems, and thus an ideal location providing flexibility.
							</p><br/>
						<p className="advantage-explanation"><span className="advantage-name">Quality </span><br/>
							Advanced construction design including upgraded power and IT infrastructure allowing for medical and other high tech uses.
							</p><br/>
						<p className="advantage-explanation"><span className="advantage-name">Flexibility </span><br/>
							Both ownership and lease opportunities within the development.
							</p>
						</div>
        	</div>);
    }
}
