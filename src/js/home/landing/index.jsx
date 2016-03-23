import React, { Component } from 'react';
import sass from './styles.scss';

export default class Press extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div id="home" className="full-screen">
								<div className="col-xs-12 col-sm-3" style={{backgroundColor: 'red', height: '200px'}}>Logo shit</div>
								<div className="col-xs-12 col-sm-6 col-sm-offset-3" style={{backgroundColor: 'blue', height: '200px'}}>
									<h1>Westgate Health Campus</h1>
									<h2>An Extraordinary Campus for Healthcare</h2>
								</div>
								<div className="col-xs-12 col-sm-6 col-sm-offset-6" style={{backgroundColor: 'blue', height: '200px'}}>
									<h2>An Extraordinary Campus for Healthcare</h2>
								</div>
              </div>
                );
    }
}
