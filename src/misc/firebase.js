import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const config = {
  apiKey: 'AIzaSyCu7pVHDN72rUZDCxMnoU27XJ-YaYsJnuw',
  authDomain: 'quiz-app-79164.firebaseapp.com',
  databaseURL: 'https://quiz-app-79164-default-rtdb.firebaseio.com',
  projectId: 'quiz-app-79164',
  storageBucket: 'quiz-app-79164.appspot.com',
  messagingSenderId: '244317574458',
  appId: '1:244317574458:web:eafb3ce39e129caa8f2c03',
  measurementId: 'G-736GT4NJNZ',
};

const app = firebase.initializeApp(config)
export const auth = app.auth(); //give auth object that we can use to interact with firebase
export const database = app.database();
export const storage =app.storage();

