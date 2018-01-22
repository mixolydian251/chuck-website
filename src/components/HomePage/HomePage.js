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
  }

  handlePageLoad = () => {
    this.setState({ pageLoaded: true })
  };

  render(){
    return(
      <div>
        {!this.state.pageLoaded &&
        <Loading/>
        }
          <div className="body" >
            <Header/>
            <Quote/>
            <About handlePageLoad={this.handlePageLoad}/>
            <PremiumPitch/>
          </div>
      </div>
    )
  }
}

export default HomePage
