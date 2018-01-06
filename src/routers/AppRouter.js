import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import HomePage from '../components/HomePage/HomePage';
import CreateAccountPage from '../components/CreateAccountPage';
import CollectionsPage from '../components/CollectionsPage';
import ReviewsPage from '../components/ReviewsPage';
import EventsPage from '../components/EventsPage';
import NotFoundPage from '../components/NotFoundPage';
import Menu from '../components/Menu';
import MobileMenu from "../components/MobileMenu";
import Footer from '../components/Footer'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      {window.innerWidth > 768 ? <Menu/> : <MobileMenu/>}
      <Switch>
        <PublicRoute path="/" component={HomePage} exact={true}/>
        <PublicRoute path="/collections" component={CollectionsPage} />
        <PublicRoute path="/reviews" component={ReviewsPage} />
        <PublicRoute path="/events" component={EventsPage} />
        <PublicRoute path="/create-account" component={CreateAccountPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default AppRouter;

export { history };
