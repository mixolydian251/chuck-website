import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {startLogin, startLogout} from "../../actions/authentication"
import { firebase } from '../../firebase/firebase';

const sideArrow = require('../../images/side_menu_arrow.svg');

class SideMenu extends React.Component {
  state = {
    plays: false,
    prose: false,
    events: false,
    user: false,
  };
  handlePlaysTouch = () => {
    this.setState(prevState => ({
      plays: !prevState.plays,
      prose: false,
      events: false,
      user: false,
    }));
  };
  handleProseTouch = () => {
    this.setState(prevState => ({
      plays: false,
      prose: !prevState.prose,
      events: false,
      user: false,
    }));
  };
  handleEventsTouch = () => {
    this.setState(prevState => ({
      plays: false,
      prose: false,
      events: !prevState.events,
      user: false,
    }));
  };
  handleUserTouch = () => {
    this.setState(prevState => ({
      plays: false,
      prose: false,
      events: false,
      user: !prevState.user
    }));
  };

  render() {
    return (
      <div className="mobilemenu__nav-container">
        <div className="mobilemenu__nav">About</div>

        <button onClick={this.handlePlaysTouch}>
          <div className="mobilemenu__nav mobilemenu__nav--hitbox">
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Plays</div>
            {this.state.plays && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--plays">
                <Link to={{ pathname: "/plays", state: { whereTo: "ten-minute-plays" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  10 Minute Plays
                </Link>
                <Link to={{ pathname: "/plays", state: { whereTo: "one-act-plays" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  One Act Plays
                </Link>
                <Link to={{ pathname: "/plays", state: { whereTo: "full-length-plays" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  Full-Length Plays
                </Link>
              </div>
            )}
          </div>
        </button>

        <button onClick={this.handleProseTouch}>
          <div className="mobilemenu__nav mobilemenu__nav--hitbox">
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Prose</div>
            {this.state.prose && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--prose">
                <Link to={{ pathname: "/prose", state: { whereTo: "short-stories" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  Short Stories
                </Link>
                <Link to={{ pathname: "/prose", state: { whereTo: "online-series" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  Online Series
                </Link>
              </div>
            )}
          </div>
        </button>

        <Link to={{ pathname: "/essays" }}
              onClick={this.props.handleSideMenuTouch}
              className="mobilemenu__nav">
          Essays
        </Link>

        <button onClick={this.handleEventsTouch}>
          <div className="mobilemenu__nav mobilemenu__nav--hitbox">
            <img className="mobilemenu__nav--arrow" src={sideArrow} />
            <div>Events</div>
            {this.state.events && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--events">
                <Link to={{ pathname: "/events", state: { whereTo: "upcoming" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  Upcoming Events
                </Link>
                <Link to={{ pathname: "/events", state: { whereTo: "upcoming" }}}
                      onClick={this.props.handleSideMenuTouch}
                      className="mobilemenu__nav--drop-down-item">
                  Past Events
                </Link>
              </div>
            )}
          </div>
        </button>

        <Link to={{ pathname: "/links" }}
              onClick={this.props.handleSideMenuTouch}
              className="mobilemenu__nav">
          Links
        </Link>


        {this.props.uid ? (
          <button className="mobilemenu__user" onClick={this.handleUserTouch}>
            <div className="mobilemenu__nav mobilemenu__nav--hitbox">
              <img className="mobilemenu__nav--arrow" src={sideArrow} />
              <img className="mobilemenu__user--image" src={firebase.auth().currentUser.photoURL}/>
            </div>
            <div >
              <p className="mobilemenu__user--name">{firebase.auth().currentUser.displayName}</p>
            </div>

            {this.state.user && (
              <div className="mobilemenu__nav--drop-down mobilemenu__nav--user">
                <button onClick={this.props.handleSideMenuTouch}
                        className="mobilemenu__nav--drop-down-item">
                  Account Settings
                </button>
                <button onClick={this.props.startLogout}
                        className="mobilemenu__nav--drop-down-item">
                  Logout
                </button>
              </div>
            )}
          </button>
        ) : (

          <div className="mobilemenu__log-in-container">
            <button onClick={this.props.startLogin} className="content__btn content__btn--save mobilemenu__log-in">
              Sign In
            </button>
            <button className="content__btn content__btn--blue mobilemenu__log-in">
              Create Account
            </button>
          </div>
          )
        }


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

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state, props) => ({
  uid: state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);