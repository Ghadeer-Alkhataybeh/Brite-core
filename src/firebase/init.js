import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA33v1WmR5mPkG4EuHFjf3FTxs6PqFw-Us',
  authDomain: 'brite-core-a9ecc.firebaseapp.com',
  databaseURL: 'https://brite-core-a9ecc.firebaseio.com',
  projectId: 'brite-core-a9ecc',
  storageBucket: 'brite-core-a9ecc.appspot.com',
  messagingSenderId: '424542463038'
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()