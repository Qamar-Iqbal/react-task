import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBgKvaR_4syGLrVlRuKqZZmrDURFd3J2_U",
    authDomain: "react-1826e.firebaseapp.com",
    projectId: "react-1826e",
    storageBucket: "react-1826e.appspot.com",
    messagingSenderId: "163925245524",
    appId: "1:163925245524:web:fc97d9342bc175708c37c1",
    measurementId: "G-B6D3LWF7K8"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);
  
  export default fire;