import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDPai_GwpZVv4jJJsPW2UIkxYg6IpQ7uKg',
  authDomain: 'charles-keith-website.firebaseapp.com',
  databaseURL: 'https://charles-keith-website.firebaseio.com',
  projectId: 'charles-keith-website',
  storageBucket: 'gs://charles-keith-website.appspot.com/',
  messagingSenderId: '975231403228'
};

firebase.initializeApp(config);

const database = firebase.database();
const emailAuthProvider = new firebase.auth.EmailAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
facebookAuthProvider.addScope('public_profile');

const storage = firebase.storage();

export { firebase, googleAuthProvider, facebookAuthProvider, storage, database as default };
