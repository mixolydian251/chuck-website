import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AdminPage from '../components/AdminPage/AdminPage';
import HomePage from '../components/HomePage/HomePage';
import ContentDisplay from "../components/ContentDisplay";
import CreateAccountPage from '../components/CreateAccountPage';
import PlaysPage from '../components/PlaysPage/PlaysPage';
import ProsePage from '../components/ProsePage/ProsePage';
import EventsPage from '../components/EventsPage';
import LinksPage from "../components/LinksPage";
import EssaysPage from "../components/EssaysPage";
import NotFoundPage from '../components/NotFoundPage';


import Menu from '../components/Menu';
import Footer from '../components/Footer';

import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter
        history={history}>
        <div>
          <Menu/>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <AdminRoute path="/admin" component={AdminPage} />
            <Route path="/plays" component={PlaysPage} />
            <Route path="/prose" component={ProsePage} />
            <Route path="/essays" component={EssaysPage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/links" component={LinksPage} />
            <Route path="/content/:id" component={ContentDisplay} />
            <Route path="/create-account" component={CreateAccountPage} />
            <Route component={NotFoundPage}/>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;

export { history };
