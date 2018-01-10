import React from 'react';
import { Route ,Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AdminPage from '../components/AdminPage/AdminPage';
import HomePage from '../components/HomePage/HomePage';
import ContentDisplay from "../components/ContentDisplay";
import CreateAccountPage from '../components/CreateAccountPage';
import PlaysPage from '../components/PlaysPage/PlaysPage';
import ProsePage from '../components/ProsePage/ProsePage';
import EventsPage from '../components/EventsPage';
import NotFoundPage from '../components/NotFoundPage';


import Menu from '../components/Menus/Menu';
import Footer from '../components/Footer';

import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const history = createHistory();

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Menu/>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <AdminRoute path="/admin" component={AdminPage} />
            <Route path="/plays" component={PlaysPage} />
            <Route path="/prose" component={ProsePage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/content/:id" component={ContentDisplay} />
            <Route path="/create-account" component={CreateAccountPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default AppRouter;

export { history };
