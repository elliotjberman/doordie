import React, { Component } from 'react';
import sass from './styles.scss';

export default class AboutUs extends Component {
    constructor() {
        super();
    }

    render() {
      console.log("HERE");
        return (
              <div>
                  <div className="col-xs-12">
                          <h1>Westgate Health Campus</h1>
                          <h2>An Extraordinary Campus for Healthcare</h2>
                  </div>

                  <div className="col-xs-12 col-sm-8 col-md-6">
                          <p className="testing">
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
