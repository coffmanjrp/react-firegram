import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB8maBwrt665IxGM4Tpk-G-RBfI1jitkS4',
  authDomain: 'firegram-9a400.firebaseapp.com',
  projectId: 'firegram-9a400',
  storageBucket: 'firegram-9a400.appspot.com',
  messagingSenderId: '1045870406851',
  appId: '1:1045870406851:web:27cae0e7706f4f347c8676',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
