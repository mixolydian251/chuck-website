import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../../images/chuck_logo_white.svg');

class Menu extends React.Component{
  state = {
    plays: false,
    prose: false,
    events: false,
  };
  handleWorksHover = () => {
    this.setState((prevState) => ({ plays: !prevState.plays }))
  };
  handleReviewsHover = () => {
    this.setState((prevState) => ({ prose: !prevState.prose }))
  };
  handleEventsHover = () => {
    this.setState((prevState) => ({ events: !prevState.events }))
  };

  render(){
    return(
      <menu id="menu-container" className="menu-container">
        <div id="menu" className="menu">

          <img src={logo} id="logo" className="menu__logo"/>

          <div className="menu__nav-container">



            <div to="/" className="menu__nav">About</div>



            <button onMouseEnter={this.handleWorksHover}
                    onMouseLeave={this.handleWorksHover}>
              <div to="/collections" className="menu__nav menu__nav--hitbox">
                Plays
                {this.state.plays && <div className="menu__nav--drop-down menu__nav--plays">
                  <div className="menu__nav--drop-down-item">10 Minute Plays</div>
                  <div className="menu__nav--drop-down-item">One Act Plays</div>
                  <div className="menu__nav--drop-down-item">Full-Length Plays</div>
                </div> }
              </div>
            </button>



            <button onMouseEnter={this.handleReviewsHover}
                    onMouseLeave={this.handleReviewsHover}>
              <div to="/reviews" className="menu__nav menu__nav--hitbox">
                Prose
                {this.state.prose && <div className="menu__nav--drop-down menu__nav--prose">
                  <div className="menu__nav--drop-down-item">Short Stories</div>
                  <div className="menu__nav--drop-down-item"> Online Story Series</div>
                </div> }
              </div>
            </button>



            <div to="/" className="menu__nav">Essays</div>



            <button onMouseEnter={this.handleEventsHover}
                    onMouseLeave={this.handleEventsHover}>
              <div to="/events" className="menu__nav menu__nav--hitbox">
                Events
                {this.state.events && <div className="menu__nav--drop-down menu__nav--events">
                  <div className="menu__nav--drop-down-item">Upcoming Events</div>
                  <div className="menu__nav--drop-down-item">Past Events</div>
                </div> }
              </div>
            </button>




            <div to="/" className="menu__nav">Links</div>


          </div>

          <div className="menu__log-in-container">
            <p className="menu__log-in">Sign In</p>
            <p className="menu__log-in">Create Account</p>
          </div>

        </div>
      </menu>
    )
  }
}

export default Menu