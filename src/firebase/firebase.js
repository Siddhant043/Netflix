import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBu6qOJ4PqSZ58RfPo-CJWTGibpfp4izGE",
  authDomain: "netflix-11c1c.firebaseapp.com",
  projectId: "netflix-11c1c",
  storageBucket: "netflix-11c1c.appspot.com",
  messagingSenderId: "603932818203",
  appId: "1:603932818203:web:eb0afbc01ce2e44113f1be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
