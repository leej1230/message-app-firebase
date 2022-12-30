import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAIYD5ArtlGEzh22C2ovn5BI6i08qvxu8w",
    authDomain: "message-app-2cd26.firebaseapp.com",
    projectId: "message-app-2cd26",
    storageBucket: "message-app-2cd26.appspot.com",
    messagingSenderId: "47989019630",
    appId: "1:47989019630:web:ec6c76f1feb7f4ccde74ff"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};