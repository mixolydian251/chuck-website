import React from 'react';
import { Link } from 'react-router-dom';

const sideArrow = require('../../images/side_menu_arrow.svg');

class SideMenu extends React.Component {
  state = {
    works: false,
    reviews: false,
    events: false
  };
  handleWorksTouch = () => {
    this.setState(prevState => ({
      works: !prevState.works,
      reviews: false,
      events: false
    }));
  };
  handleReviewsTouch = () => {
    this.setState(prevState => ({
      works: false,
      reviews: !prevState.reviews,
      events: false
    }));
  };
  handleEventsTouch = () => {
    this.setState(prevState => ({
      works: false,
      reviews: false,
      events: !prevState.events
    }));
  };

  render() {
    return (
      <div className="mobilemenu__nav-container">
        <div className="mobilemenu__nav">About</div>

        <button onClick={this.handleWorksTouch}>
          <div
            to="/collections"
            className="mobilemenu__nav mobilemenu__nav--hitbox"
          >
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Plays</div>
            {this.state.works && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--plays">
                <div className="mobilemenu__nav--drop-down-item">
                  10 Minute Plays
                </div>
                <div className="mobilemenu__nav--drop-down-item">
                  One Act Plays
                </div>
                <div className="mobilemenu__nav--drop-down-item">
                  Full-Length Plays
                </div>
              </div>
            )}
          </div>
        </button>

        <button onClick={this.handleReviewsTouch}>
          <div
            to="/reviews"
            className="mobilemenu__nav mobilemenu__nav--hitbox"
          >
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Prose</div>
            {this.state.reviews && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--prose">
                <div className="mobilemenu__nav--drop-down-item">
                  Short Stories
                </div>
                <div className="mobilemenu__nav--drop-down-item">
                  Online Series Piece
                </div>
              </div>
            )}
          </div>
        </button>

        <div className="mobilemenu__nav">Essays</div>

        <button onClick={this.handleEventsTouch}>
          <div to="/events" className="mobilemenu__nav mobilemenu__nav--hitbox">
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Events</div>
            {this.state.events && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--events">
                <div className="mobilemenu__nav--drop-down-item">
                  Upcoming Events
                </div>
                <div className="mobilemenu__nav--drop-down-item">
                  Past Events
                </div>
              </div>
            )}
          </div>
        </button>

        <div className="mobilemenu__nav">Links</div>

        <div className="mobilemenu__log-in-container">
          <p className="mobilemenu__log-in">Sign In</p>
          <p className="mobilemenu__log-in">Create Account</p>
        </div>

        <button
          className="mobilemenu__exit"
          onClick={this.props.handleSideMenuTouch}
        >
          {' '}
          x{' '}
        </button>
      </div>
    );
  }
}

export default SideMenu;

// <div className="mobilemenu__log-in-container">
//   <p className="mobilemenu__log-in">Sign In</p>
// <p className="mobilemenu__log-in">Create Account</p>
// </div>
