import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage/HomePage';
import CreateAccountPage from '../components/CreateAccountPage';
import PlaysPage from '../components/PlaysPage/PlaysPage';
import ProsePage from '../components/ProsePage/ProsePage';
import EventsPage from '../components/EventsPage';
import NotFoundPage from '../components/NotFoundPage';

import Menu from '../components/Menus/Menu';
import MobileMenu from "../components/Menus/MobileMenu";
import Footer from '../components/Footer'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const history = createHistory();


class AppRouter extends React.Component{
  state = {
    mobile: true,
  };

  componentWillMount(){



    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      //mobile

    } else {
      if (window.innerWidth > 768) {
        this.setState({ mobile: false })
      }

      addEventListener('resize', () => {
        window.requestAnimationFrame(() => {
          if (window.innerWidth > 768) {
            this.setState({ mobile: false })
          } else{
            this.setState({ mobile: true })
          }
        });
      })
    }


  }

  render(){
    return(
      <Router history={history}>
        <div>
          {this.state.mobile ? <MobileMenu/> : <Menu/>}
          <Switch>
            <PublicRoute path="/" component={HomePage} exact={true}/>
            <PublicRoute path="/plays" component={PlaysPage} />
            <PublicRoute path="/reviews" component={ProsePage} />
            <PublicRoute path="/events" component={EventsPage} />
            <PublicRoute path="/create-account" component={CreateAccountPage} />
            <PublicRoute component={NotFoundPage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default AppRouter;

export { history };
