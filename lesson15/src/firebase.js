import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyAidtWPcWr-GwaTvd-TusJDWVSuKeT5Hos",
    authDomain: "fb-lesson1.firebaseapp.com",
    projectId: "fb-lesson1",
    storageBucket: "fb-lesson1.appspot.com",
    messagingSenderId: "112199711615",
    appId: "1:112199711615:web:bb1041aa10533a64eff84a"
  };

  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database;

  export default firebase;