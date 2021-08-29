import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMyv_Hg72BuB6cd-VEsIaawmnTBoF-rT4",
  authDomain: "slack-ron.firebaseapp.com",
  databaseURL: "https://slack-ron-default-rtdb.firebaseio.com",
  projectId: "slack-ron",
  storageBucket: "slack-ron.appspot.com",
  messagingSenderId: "121933980339",
  appId: "1:121933980339:web:55c819f54e3a8b90ce06c6",
  measurementId: "G-FGPR7WCE2K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
