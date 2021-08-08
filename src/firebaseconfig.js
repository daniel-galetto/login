import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAVHxEZ8EmkgEdYBpIbas3GI3eSlHXpl4I",
    authDomain: "login-e931b.firebaseapp.com",
    databaseURL: "https://login-e931b.firebaseio.com",
    projectId: "login-e931b",
    storageBucket: "login-e931b.appspot.com",
  };

const fire = firebase.initializeApp(firebaseConfig);
const auth =  fire.auth()

export {auth}




