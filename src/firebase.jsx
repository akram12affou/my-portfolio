import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCifL0U3ArHhCKoGxW5AZuAa4ipiGk9cJY",
  authDomain: "project-firebase-pedro-tuto.firebaseapp.com",
  projectId: "project-firebase-pedro-tuto",
  storageBucket: "project-firebase-pedro-tuto.appspot.com",
  messagingSenderId: "950749105325",
  appId: "1:950749105325:web:335cdb27c4357114c58a24",
  measurementId: "G-ZKDNQ386HG"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
