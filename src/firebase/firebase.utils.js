import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCj8IxAhwKgBOhLbpWt8hSpTa2DYkrhRfA",
  authDomain: "crown-db-daa22.firebaseapp.com",
  databaseURL: "https://crown-db-daa22.firebaseio.com",
  projectId: "crown-db-daa22",
  storageBucket: "crown-db-daa22.appspot.com",
  messagingSenderId: "182176654232",
  appId: "1:182176654232:web:5efefaacdd38cfe28041ed",
  measurementId: "G-SST9KMV3FN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
