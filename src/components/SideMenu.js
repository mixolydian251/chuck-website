import React from 'react';
import { Link } from 'react-router-dom';


class SideMenu extends React.Component{
  state = {
    works: false,
    reviews: false,
    events: false,
  };
  handleWorksTouch = () => {
    this.setState((prevState) => ({
      works: !prevState.works,
      reviews: false,
      events: false,
    }))
  };
  handleReviewsTouch = () => {
    this.setState((prevState) => ({
      works: false,
      reviews: !prevState.reviews,
      events: false,
    }))
  };
  handleEventsTouch = () => {
    this.setState((prevState) => ({
      works: false,
      reviews: false,
      events: !prevState.events,
    }))
  };

  render(){
    return(
      <div className="mobilemenu__nav-container">
        <div to="/" className="mobilemenu__nav">Home</div>

        <button onClick={this.handleWorksTouch}>
          <div to="/collections" className="mobilemenu__nav mobilemenu__nav--hitbox">
            Works
            {this.state.works && <div className="mobilemenu__nav--drop-down mobilemenu__nav--works">
              <p>10 Minute Plays</p>
              <p>One Act Plays</p>
              <p>Full-Length Plays</p><hr/>
              <p>Series Pieces</p>
              <p>Published Works</p>
            </div> }
          </div>
        </button>

        <button onClick={this.handleReviewsTouch}>
          <div to="/reviews" className="mobilemenu__nav mobilemenu__nav--hitbox">
            Reviews
            {this.state.reviews && <div className="mobilemenu__nav--drop-down mobilemenu__nav--reviews">
              <p>Books</p>
              <p>Plays</p>
              <p>Articles & Miscellaneous</p>
            </div> }
          </div>
        </button>

        <button onClick={this.handleEventsTouch}>
          <div to="/events" className="mobilemenu__nav mobilemenu__nav--hitbox">
            Events
            {this.state.events && <div className="mobilemenu__nav--drop-down mobilemenu__nav--events">
              <p>Upcoming Events</p>
              <p>Past Events</p>
            </div> }
          </div>
        </button>

        <button className="mobilemenu__exit" onClick={this.props.handleSideMenuTouch}> x </button>

      </div>
    )
  }
}

export default SideMenu







// <div className="mobilemenu__log-in-container">
//   <p className="mobilemenu__log-in">Sign In</p>
// <p className="mobilemenu__log-in">Create Account</p>
// </div>





