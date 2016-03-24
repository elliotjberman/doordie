import React, { Component } from 'react';
import sass from './styles.scss';
import aerial from 'img/aerial.jpeg'

export default class AboutUs extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div id="about" className="full-screen">
                  <div className="col-xs-12 col-md-4 col-md-offset-1">
										<div>
											<h1>Overview</h1>
                        <p className="about-copy">
                                Westgate Health Campus is one of the largest comprehensive healthcare developments in the Southwest.
                                 With over 200,000 square feet of Class A office space organized in a unique five building circular configuration, it provides a thoroughly modern and integrated healthcare campus.
                                 Based in the burgeoning City of Glendale, it lies at the heart of metropolitan Phoenix, Arizona, and at the crossroads of the main Highway 101N and I-10 corridors.<br/><br/>
                                 Within a short distance of the three largest health systems in Arizona, and proximity to major access including highways as well as Glendale Ave.,
                                 it is an ideal location for a transformative healthcare campus, and an economic engine for Glendale and the West Valley.
                                 Nearby are major entertainment and shopping venues to complement the campus which offers both condominium and rental space,
                                 organized about complementary points of patient care, as well as related areas of research and education, and supplemental retail and pharmacy.
                        </p>
		                 </div>
                  </div>
									<div className="col-md-5 col-md-offset-1">
										<img id="birdpic" src={aerial} />
									</div>

                </div>
                );
    }
}
