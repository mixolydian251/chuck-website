import React from 'react';
import Header from './Header';
import About from './About';
import Quote from './Quote';
import PremiumPitch from './PremiumPitch';
import Loading from '../Loading';

class HomePage extends React.Component{
  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div>
          <div className="body" >
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
