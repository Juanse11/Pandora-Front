import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsk94dkgdC8MF3Sq1RldOUyPJNofw8wdA",
  authDomain: "pandora-1c329.firebaseapp.com",
  databaseURL: "https://pandora-1c329.firebaseio.com",
  projectId: "pandora-1c329",
  storageBucket: "gs://pandora-1c329.appspot.com/",
  messagingSenderId: "135317073285",
  appId: "1:135317073285:web:2892296370580550"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const authentication = firebase.auth();

export { firebase, storage, authentication as default };
