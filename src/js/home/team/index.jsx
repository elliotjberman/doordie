import React, { Component } from 'react';
import kitchell from 'img/kitchell.svg';
import BDG from 'img/BDG.svg';
import mattson from 'img/mattson.jpg';
import newmark from 'img/newmark.jpg';
import sass from './styles.scss';
import TeamMember from './team-member';
import teams from 'teams.json';


export default class Team extends Component {
    constructor() {
        super();
    }

    render() {
        return (
              <div id="team" className="full-screen">
                  <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <h1 className="header">Team</h1>
                        <TeamMember image={kitchell} text={teams.kitchell} />
                        <TeamMember image={BDG} text={teams.BDG} />
                        <TeamMember image={mattson} text={teams.mattson} />
                        <TeamMember image={newmark} text={teams.newmark} />
                  </div>
                </div>
                );
    }
}
