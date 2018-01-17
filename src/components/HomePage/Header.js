import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component {
  componentDidMount() {
    const menu = document.getElementById('menu');
    const menuBackground = document.getElementById('menu-container');
    const logo = document.getElementById('logo');
    const arrowPlays = document.getElementsByClassName('menu__nav--arrow')[0];
    const arrowProse = document.getElementsByClassName('menu__nav--arrow')[1];
    const arrowEvents = document.getElementsByClassName('menu__nav--arrow')[2];

    if (window.innerWidth > 768) {

      menu.style.color = `#ffffff`;
      menuBackground.style.background = 'transparent';
      logo.style.filter = 'invert(0%)';
      arrowPlays.style.filter = 'invert(100%)';
      arrowProse.style.filter = 'invert(100%)';
      arrowEvents.style.filter = 'invert(100%)';

      // if (this.props.content.authId){
      //   const arrowUser = document.getElementsByClassName('menu__nav--arrow')[3];
      //   arrowUser.style.filter = 'invert(100%)';
      // }

      window.addEventListener('scroll', menuColor)
    }
  }
  componentWillUnmount() {
    if (window.innerWidth > 768) {
      const menu = document.getElementById('menu');
      const menuBackground = document.getElementById('menu-container');
      const logo = document.getElementById('logo');
      const arrowPlays = document.getElementsByClassName('menu__nav--arrow')[0];
      const arrowProse = document.getElementsByClassName('menu__nav--arrow')[1];
      const arrowEvents = document.getElementsByClassName('menu__nav--arrow')[2];

      window.removeEventListener('scroll', menuColor);

      menu.style.color = `#222222`;
      menuBackground.style.background = 'linear-gradient(to top left , #F2F2F2,#DBDBDB,#EAEAEA)';
      logo.style.filter = 'invert(100%)';
      arrowPlays.style.filter = 'invert(0%)';
      arrowProse.style.filter = 'invert(0%)';
      arrowEvents.style.filter = 'invert(0%)';
    }
  }
  render() {
    return (
      <header id="background-1" className="header">
        <h1 className="header__title">Charles Keith</h1>
        <h1 className="header__subtitle">Writer. Playwright. Reviews</h1>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  authId: state.authId,
});

export default connect(mapStateToProps)(Header);








function menuColor () {
  const background1 = document.getElementById('background-1');
  const menu = document.getElementById('menu');
  const menuBackground = document.getElementById('menu-container');
  const logo = document.getElementById('logo');
  const arrowPlays = document.getElementsByClassName('menu__nav--arrow')[0];
  const arrowProse = document.getElementsByClassName('menu__nav--arrow')[1];
  const arrowEvents = document.getElementsByClassName('menu__nav--arrow')[2];

  if (window.scrollY < window.innerHeight) {
    window.requestAnimationFrame(() => {
      background1.style.transform = `translateY(-${window.scrollY /
      3}px)`;
    });
  }

  if (window.scrollY < window.innerHeight - 210) {
    menu.style.color = `#ffffff`;
    menuBackground.style.background = 'transparent';
    logo.style.filter = 'invert(0%)';
    arrowPlays.style.filter = 'invert(100%)';
    arrowProse.style.filter = 'invert(100%)';
    arrowEvents.style.filter = 'invert(100%)';

    // if (this.props.content.authId){
    //   const arrowUser = document.getElementsByClassName('menu__nav--arrow')[3];
    //   arrowUser.style.filter = 'invert(100%)';
    // }

  } else {
    menu.style.color = `#222222`;
    menuBackground.style.background = 'linear-gradient(to top left , #F2F2F2,#DBDBDB,#EAEAEA)';
    logo.style.filter = 'invert(100%)';
    arrowPlays.style.filter = 'invert(0%)';
    arrowProse.style.filter = 'invert(0%)';
    arrowEvents.style.filter = 'invert(0%)';

    // if (this.props.content.authId){
    //   const arrowUser = document.getElementsByClassName('menu__nav--arrow')[3];
    //   arrowUser.style.filter = 'invert(0%)';
    // }
  }
}
