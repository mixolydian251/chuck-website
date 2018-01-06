import React from 'react';

class Header extends React.Component{
  componentDidMount(){

    if (window.innerWidth > 768 ){
      const background1 = document.getElementById('background-1');
      const menu = document.getElementById('menu');
      const menuBackground = document.getElementById('menu-container');
      const logo = document.getElementById('logo');

      menu.style.color = `#ffffff`;
      menuBackground.style.backgroundColor = "transparent";
      logo.style.filter = 'invert(0%)';

      window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
          window.requestAnimationFrame(() => {
            background1.style.transform = `translateY(-${window.scrollY / 3}px)`;
          });
        }

        if(window.scrollY < window.innerHeight - 200) {
          menu.style.color = `#ffffff`;
          menuBackground.style.backgroundColor = "transparent";
          logo.style.filter = 'invert(0%)';
        }

        else{
          menu.style.color = `#222222`;
          menuBackground.style.backgroundColor = "#f8f8f8";
          logo.style.filter = 'invert(100%)';
        }
      });

    }

  }
  render(){
    return(
      <header id="background-1" className="header">
        <h1 className="header__title">Charles Keith</h1>
        <h1 className="header__subtitle">Writer. Playwright. Reviews</h1>
      </header>
    )
  }
}

export default Header
