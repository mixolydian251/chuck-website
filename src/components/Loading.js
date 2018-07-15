import React from 'react';

class Loading extends React.Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div style={{height: '100vh', width: '100vw', backgroundColor: 'white', zIndex: 100}}>

      </div>
    )
  }
}

export default Loading

// <div id="loading" className="loading">
//
//   <div className="book book--events spinner">
//    Charles Keith
//    <div className="book__line1"> </div>
//    <div className="book__line2"> </div>
//    <div className="book__author book__author-events">Keith</div>
//   </div>
//
//   <h1 className="loading__text">Loading..</h1>
// </div>