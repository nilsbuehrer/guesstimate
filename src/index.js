import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDz3g0Nm9XMlfn2T9l549EuHCQpZwqIGoQ",
    authDomain: "guesstimate-44045.firebaseapp.com",
    databaseURL: "https://guesstimate-44045.firebaseio.com",
    projectId: "guesstimate-44045",
    storageBucket: "guesstimate-44045.appspot.com",
    messagingSenderId: "887072051297",
    appId: "1:887072051297:web:48a212739a779d7b061a20",
    measurementId: "G-7S61FY8F00"
  };
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
