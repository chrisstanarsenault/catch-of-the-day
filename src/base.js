import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA07YtgnLm4c3F91VeE1rrpyWM4K3AeYZk",
  authDomain: "catch-of-the-day-d0499.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d0499.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;