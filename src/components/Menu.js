import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../images/chuck_logo_white.svg');

class Menu extends React.Component{
  state = {
    works: false,
    reviews: false,
    events: false,
  };
  handleWorksHover = () => {
    this.setState((prevState) => ({ works: !prevState.works }))
  };
  handleReviewsHover = () => {
    this.setState((prevState) => ({ reviews: !prevState.reviews }))
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
            <div to="/" className="menu__nav">Home</div>

            <button onMouseEnter={this.handleWorksHover}
                    onMouseLeave={this.handleWorksHover}>
              <div to="/collections" className="menu__nav menu__nav--hitbox">
                Works
                {this.state.works && <div className="menu__nav--drop-down menu__nav--works">
                  <p>10 Minute Plays</p>
                  <p>One Act Plays</p>
                  <p>Full-Length Plays</p><hr/>
                  <p>Series Pieces</p>
                  <p>Published Works</p>
                </div> }
              </div>
            </button>

            <button onMouseEnter={this.handleReviewsHover}
                    onMouseLeave={this.handleReviewsHover}>
              <div to="/reviews" className="menu__nav menu__nav--hitbox">
                Reviews
                {this.state.reviews && <div className="menu__nav--drop-down menu__nav--reviews">
                  <p>Books</p>
                  <p>Plays</p>
                  <p>Articles & Miscellaneous</p>
                </div> }
              </div>
            </button>

            <button onMouseEnter={this.handleEventsHover}
                    onMouseLeave={this.handleEventsHover}>
              <div to="/events" className="menu__nav menu__nav--hitbox">
                Events
                {this.state.events && <div className="menu__nav--drop-down menu__nav--events">
                  <p>Upcoming Events</p>
                  <p>Past Events</p>
                </div> }
              </div>
            </button>


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