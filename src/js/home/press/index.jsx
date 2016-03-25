import React, { Component } from 'react';
import sass from './styles.scss';

export default class Press extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div id="press" className="full-screen">

                  <div className="col-xs-12 col-sm-10 col-sm-offset-1 padded-container">
										<h1 className='header'>Press</h1>
                    <div className="links">
                      <a className="link-top" target="_blank" href="http://www.glendalestar.com/news/article_08fd792e-ea30-11e5-9fe4-7f5fccca17a1.html">The Glendale Star
                        <span><br/></span>
                        <span className="title">Developer launches $30M health care campus that will bring 1,500 jobs to Glendale</span>
                        <span><br/></span>
                        <span className="date">March 17th, 2016</span>
                      </a>
                      <a className="link" target="_blank" href="http://www.yourwestvalley.com/glendale/article_2de7064c-e765-11e5-b9ef-d7dc6aea1fb7.html">Your West Valley
                      <span><br/></span>
                      <span className="title">$30 million health campus breaks ground in Glendale</span>
                      <span><br/></span>
                      <span className="date">March 11th, 2016</span>
                      </a>
                      <a className="link" target="_blank" href="http://www.bizjournals.com/phoenix/blog/health-care-daily/2016/03/30-million-health-campus-breaks-ground-in.html">Phoenix Business Journal
                        <span><br/></span>
                        <span className="title">Westgate Healthcare Campus breaks ground in Glendale</span>
                        <span><br/></span>
                        <span className="date">March 10th, 2016</span>
                      </a>
                    </div>
                  </div>
                </div>
                );
    }
}
