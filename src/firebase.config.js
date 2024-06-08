// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ZcfLIzRg6rddp9IYPhkDZY1hhRVVzTk",
  authDomain: "todo-74568.firebaseapp.com",
  databaseURL: "https://todo-74568-default-rtdb.firebaseio.com",
  projectId: "todo-74568",
  storageBucket: "todo-74568.appspot.com",
  messagingSenderId: "890620561001",
  appId: "1:890620561001:web:cd7e33cddc3cf4399a44f8",
  measurementId: "G-HRLB1RS3JY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig