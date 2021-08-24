import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDP24WJ6ZbOixuDDRSPYnyOYkCmpzDXveM",
  authDomain: "nuxt-75358.firebaseapp.com",
  projectId: "nuxt-75358",
  storageBucket: "nuxt-75358.appspot.com",
  messagingSenderId: "298234014347",
  appId: "1:298234014347:web:c9848c59bf1715962bc28e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}//para que no haga la inicializaqción dos veces

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {firebase, db, auth, storage}
