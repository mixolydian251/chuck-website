import 'normalize.css/normalize.css';
import './styles/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/authentication';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import Loading from './components/Loading';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    setTimeout(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
      hasRendered = true;
    },1)
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