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

const storage = firebase.storage();

export { firebase, googleAuthProvider, storage, database as default };
