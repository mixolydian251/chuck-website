import React from 'react';
import Header from './Header';
import About from './About';
import Quote from './Quote';
import PremiumPitch from './PremiumPitch';
import Loading from '../Loading';

class HomePage extends React.Component{
  state = {
    pageLoaded: false,
  };

  componentDidMount(){
    window.scrollTo(0,0);
    this.setState({ pageLoaded: true });
  }
  render(){
    return(
      <div>
        {!this.state.pageLoaded &&
        <Loading/>}
          <div className="body">
            <Header/>
            <Quote/>
            <About/>
            <PremiumPitch/>
          </div>
      </div>
    )
  }
}

export default HomePage
