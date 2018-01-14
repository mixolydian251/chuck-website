import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin, startLogout } from '../actions/authentication';
import { firebase } from '../firebase/firebase';
import { history } from "../routers/AppRouter"
const logo = require('../images/chuck_logo_white.svg');
const dropArrow = require('../images/drop_down_arrow.svg');

class DesktopMenu extends React.Component {
  state = {
    plays: false,
    prose: false,
    events: false,
    user: false
  };
  handleWorksHover = () => {
    this.setState(prevState => ({ plays: !prevState.plays }));
  };
  handleReviewsHover = () => {
    this.setState(prevState => ({ prose: !prevState.prose }));
  };
  handleEventsHover = () => {
    this.setState(prevState => ({ events: !prevState.events }));
  };
  handleUserHover = () => {
    this.setState(prevState => ({ user: !prevState.user }));
  };
  handleMenuReset = () => {
    this.setState(prevState => ({
      plays: false,
      prose: false,
      events: false,
      user: false
    }));
  };
  handleLogout = () => {
    this.props.startLogout();
    this.setState(prevState => ({
      plays: false,
      prose: false,
      events: false,
      user: false
    }));
    history.push("/")
  };

  render() {
    return (
      <menu id="menu-container" className="menu-container">
        <div id="menu" className="menu">

          <Link to="/" className="menu__nav menu__nav--hitbox">
            <img src={logo} id="logo" className="menu__logo" />
          </Link>

          <div className="menu__nav-container">
            <div className="menu__nav">
              About
            </div>

            <button
              onClick={this.handleMenuReset}
              onMouseEnter={this.handleWorksHover}
              onMouseLeave={this.handleWorksHover}
            >
              <div className="menu__nav menu__nav--hitbox">
                Plays
                <img id="arrow" className="menu__nav--arrow" src={dropArrow}/>
                {this.state.plays && (
                  <div className="menu__nav--drop-down menu__nav--plays">
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      <Link to={{ path: 'plays', hash: '#ten-minute-plays'}} className="menu__nav menu__nav--hitbox">
                        10 Minute Plays
                      </Link>
                    </button>
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      <Link to="/plays#one-act-plays" className="menu__nav menu__nav--hitbox">
                        One Act Plays
                      </Link>
                    </button>
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      <Link to="/plays#full-length-plays" className="menu__nav menu__nav--hitbox">
                        Full-Length-Plays
                      </Link>
                    </button>
                    <div className="menu__nav--dropdown-line1"> </div>
                    <div className="menu__nav--dropdown-line2"> </div>
                    <div className="menu__nav--dropdown-line3"> </div>
                    <div className="menu__nav--dropdown-author menu__nav--dropdown-author-plays">Plays</div>

                  </div>
                )}
              </div>
            </button>

            <button
              onClick={this.handleMenuReset}
              onMouseEnter={this.handleReviewsHover}
              onMouseLeave={this.handleReviewsHover}
            >
              <Link to="/prose" className="menu__nav menu__nav--hitbox">
                Prose
                <img id="arrow" className="menu__nav--arrow" src={dropArrow}/>
                {this.state.prose && (
                  <div className="menu__nav--drop-down menu__nav--prose">
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      Short Stories
                    </button>
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      Online Story Series
                    </button>

                    <div className="menu__nav--dropdown-line1"> </div>
                    <div className="menu__nav--dropdown-line2"> </div>
                    <div className="menu__nav--dropdown-line3"> </div>
                    <div className="menu__nav--dropdown-author menu__nav--dropdown-author-prose">Prose</div>

                  </div>
                )}
              </Link>
            </button>

            <div  className="menu__nav">
              Essays
            </div>

            <button
              onClick={this.handleMenuReset}
              onMouseEnter={this.handleEventsHover}
              onMouseLeave={this.handleEventsHover}
            >
              <Link to="/events" className="menu__nav menu__nav--hitbox">
                Events
                <img id="arrow" className="menu__nav--arrow" src={dropArrow}/>
                {this.state.events && (
                  <div className="menu__nav--drop-down menu__nav--events">
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      Upcoming Events
                    </button>
                    <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                      Past Events
                    </button>

                    <div className="menu__nav--dropdown-line1"> </div>
                    <div className="menu__nav--dropdown-line2"> </div>
                    <div className="menu__nav--dropdown-line3"> </div>
                    <div className="menu__nav--dropdown-author menu__nav--dropdown-author-events">Events</div>

                  </div>
                )}
              </Link>
            </button>

            <div className="menu__nav">
              Links
            </div>
          </div>

          {this.props.uid ? (
            <button
              className="menu__user"
              onClick={this.handleMenuReset}
              onMouseEnter={this.handleUserHover}
              onMouseLeave={this.handleUserHover}
            >
              <div className="menu__user--image">
                <img src={firebase.auth().currentUser.photoURL} />
              </div>
              <div className="menu__user--name">
                <p>{firebase.auth().currentUser.displayName}</p>
              </div>
              <img id="arrow" className="menu__nav--arrow" src={dropArrow}/>
              {this.state.user && (
                <div className="menu__nav--drop-down menu__nav--user">
                  <button onClick={this.handleMenuReset} className="menu__nav--drop-down-item">
                    Account Settings
                  </button>
                  <button onClick={this.handleLogout}
                          className="menu__nav--drop-down-item">
                    Log out
                  </button>

                  <div className="menu__nav--dropdown-line1"> </div>
                  <div className="menu__nav--dropdown-line2"> </div>
                  <div className="menu__nav--dropdown-line3"> </div>
                  <div className="menu__nav--dropdown-author menu__nav--dropdown-author-settings">Settings</div>

                </div>
              )}
            </button>
          ) : (
            <div className="menu__log-in-container">
              <button onClick={this.props.startLogin} className="menu__log-in">
                Sign In
              </button>
              <button className="menu__log-in">Create Account</button>
            </div>
          )}
        </div>
      </menu>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state, props) => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopMenu);