import React, { Component } from 'react';
import sass from './styles.scss';


export default class TeamMember extends Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div className='team-member'>
              <div className='col-xs-12 col-sm-3'>
                <image className='logo' src={this.props.image} />
              </div>
              <div className='col-xs-12 col-sm-9'>
                <p className='description'>{this.props.text}</p>
              </div>
          </div>
                );
    }
}
