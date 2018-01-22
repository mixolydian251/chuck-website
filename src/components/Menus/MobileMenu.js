import React from 'react';
import { Link } from 'react-router-dom';

import SideMenu from './SideMenu';
import LoginModal from "./LoginModal";

const logo = require('../../images/chuck_logo_white.svg');
const menu = require('../../images/menu.svg');

class MobileMenu extends React.Component {
  state = {
    sideMenu: false,
    loginModal: false,
  };
  handleSideMenuTouch = () => {
    this.setState(prevState => ({ sideMenu: !prevState.sideMenu }));
  };

  handleLoginModal = () => {
    this.setState((prevState) => ({ loginModal: !prevState.loginModal, sideMenu: false }));
  };

  render() {
    return (
      <menu id="mobilemenu-container" className="mobilemenu-container">
        <div id="mobilemenu" className="mobilemenu">
          <Link to="/">
            <img src={logo} id="logo" className="mobilemenu__logo" />
          </Link>

          <div className="mobilemenu__title">Charles Keith</div>

          <button onClick={this.handleSideMenuTouch}>
            <img src={menu} id="menu" className="mobilemenu__button" />
          </button>

          {this.state.sideMenu && (
            <SideMenu
              handleSideMenuTouch={this.handleSideMenuTouch}
              handleLoginModal={this.handleLoginModal}
            />
          )}


          {this.state.loginModal &&
            <LoginModal handleLoginModal={this.handleLoginModal}/>}

        </div>
      </menu>
    );
  }
}

export default MobileMenu;