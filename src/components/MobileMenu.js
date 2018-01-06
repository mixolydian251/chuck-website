import React from 'react';
import { Link } from 'react-router-dom';

import SideMenu from "./SideMenu";

const logo = require('../images/chuck_logo_white.svg');
const menu = require('../images/menu.svg');

class MobileMenu extends React.Component{
  state = {
    sideMenu: false,
  };
  handleSideMenuTouch = () => {
    this.setState((prevState) => ({ sideMenu: !prevState.sideMenu}))
  };

  render(){
    return(
      <menu id="mobilemenu-container" className="mobilemenu-container">
        <div id="mobilemenu" className="mobilemenu">

          <img src={logo} id="logo" className="mobilemenu__logo"/>

          <button onClick={this.handleSideMenuTouch}><img src={menu} id="menu" className="mobilemenu__button"/></button>

          {this.state.sideMenu && <SideMenu handleSideMenuTouch={this.handleSideMenuTouch}/>}

        </div>
      </menu>
    )
  }
}

export default MobileMenu







// <div className="mobilemenu__log-in-container">
//   <p className="mobilemenu__log-in">Sign In</p>
// <p className="mobilemenu__log-in">Create Account</p>
// </div>