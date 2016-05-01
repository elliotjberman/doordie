import React, { Component } from 'react';
import sass from './styles.scss';
import newTop from 'img/new_top.jpg';
import aerial from 'img/aerial.jpeg';

export default class AboutUs extends Component {
    constructor() {
        super();
    }

    render() {

        return (
<div>

							<div id="a" className="modal fade" role="dialog">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 className="modal-title">Building A</h4>
										</div>
										<div className="modal-body">
											<p>One fine body&hellip;</p>
										</div>
									</div>
								</div>
							</div>

							<div id="b" className="modal fade" role="dialog">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 className="modal-title">Building B</h4>
										</div>
										<div className="modal-body">
											<p>One fine body&hellip;</p>
										</div>
									</div>
								</div>
							</div>

							<div id="c" className="modal fade" role="dialog">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 className="modal-title">Building C</h4>
										</div>
										<div className="modal-body">
											<p>One fine body&hellip;</p>
										</div>
									</div>
								</div>
							</div>

							<div id="d" className="modal fade" role="dialog">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 className="modal-title">Building D</h4>
										</div>
										<div className="modal-body">
											<p>One fine body&hellip;</p>
										</div>
									</div>
								</div>
							</div>

							<div id="e" className="modal fade" role="dialog">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
											<h4 className="modal-title">Building E</h4>
										</div>
										<div className="modal-body">
											<p>One fine body&hellip;</p>
										</div>
									</div>
								</div>
							</div>





              <div id="about" className="full-screen">
								<div className="padded-container">
									<h1 className='header'>Overview</h1>
									<div id="about-container">
										<div className="col-xs-12 col-md-4 col-md-offset-1">
											<p className="about-copy">
															Westgate Healthcare Campus is one of the largest comprehensive healthcare developments in the Southwest.
															 With over 200,000 square feet of Class A office space organized in a unique five building circular configuration, it provides a thoroughly modern and integrated healthcare campus.
															 Based in the burgeoning City of Glendale, it lies at the heart of metropolitan Phoenix, Arizona, and near the crossroads of the Loop 101 and I-10 corridors along Glendale Avenue, just west of Loop 101.<br/><br/>
															 Within a short distance of the three largest health systems in Arizona, and proximity to major access including highways as well as Glendale Ave.,
															 it is an ideal location for a transformative healthcare campus, and an economic engine for Glendale and the West Valley.
															 Nearby are major entertainment and shopping venues to complement the campus, which offers both condominium and rental space. The campus is organized around complementary points of patient care and related areas of research and education, as well as supplemental retail and pharmacy. Owner-financing for condo purchase and tenant improvements available, as well as joint-venture opportunities.
											</p>
											<a id='brochure-link' href="http://flyers.ngkf.com/NewMarkContent/Items/70139/99th_Ave_&_Glendale_NWC_(Westgate_Healthcare_Campus)_Brochure_E.pdf" className="about-copy">
												See Brochure
											</a>
										</div>
										<div className="col-md-5 col-md-offset-1">
											<img id="birdpic" src={newTop} />
										</div>
									</div>
									<div id="about-container-2">
										<div className="col-xs-12 col-md-4 col-md-offset-1">
											<p className="about-copy">
												<a role='button' data-toggle="modal" data-target="#a">
													Building A<br/>
													(Under construction)
												</a>
												<br/><br/>

												<a role='button' data-toggle="modal" data-target="#b">
													Building B<br/>
													2017 Delivery
												</a>
												<br/><br/>

												<a role='button' data-toggle="modal" data-target="#c">
													Building C<br/>
													Pre-leasing
												</a>
												<br/><br/>

												<a role='button' data-toggle="modal" data-target="#d">
													Building D<br/>
													Future Delivery
												</a>
												<br/><br/>

												<a role='button' data-toggle="modal" data-target="#e">
													Building E<br/>
													2017 Delivery
												</a>

											</p>

										</div>
										<div className="col-md-5 col-md-offset-1">
											<img id="birdpic" src={aerial} />
										</div>
									</div>
								</div>
              </div>

</div>
                );
    }
}
