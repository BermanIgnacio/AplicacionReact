import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMQAoVKCgF2-KTekayLAOwoYzZiYOcVF8",
    authDomain: "apli-959cc.firebaseapp.com",
    projectId: "apli-959cc",
    storageBucket: "apli-959cc.appspot.com",
    messagingSenderId: "253825000107",
    appId: "1:253825000107:web:b725f57fd6d03c35ba8dee",
    measurementId: "G-EBT3FLV85R"
  
};
  
firebase.initializeApp(firebaseConfig);
export default firebase;