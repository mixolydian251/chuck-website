import 'normalize.css/normalize.css';
import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import Loading from './components/Loading';
import { firebase } from './firebase/firebase';
import { toggleLoading } from './actions/loading';
import { login, logout } from './actions/authentication';
import {startAddContent, startRemoveContent} from './actions/content';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<Loading/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

startRemoveContent({id: '-L2Sd56j7O558ZGNUjIt'});
