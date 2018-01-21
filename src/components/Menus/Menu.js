import React from 'react';
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

class Menu extends React.Component{
  state = {
    mobile: true
  };

  componentWillMount() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      //mobile
    } else {
      
      if (window.innerWidth > 768) {
        this.setState({ mobile: false });
      }

      addEventListener('resize', () => {
        window.requestAnimationFrame(() => {
          if (window.innerWidth > 768) {
            this.setState({ mobile: false });
          } else {
            this.setState({ mobile: true });
          }
        });
      });
    }
  }

  render() {

    return (
      <div>
        {this.state.mobile ? <MobileMenu/> : <DesktopMenu/>}
      </div>
    )
  }
}

export default Menu