
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
} from 'firebase/firestore'

import {
  getAuth,
} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDfsQq5PVCo3wtk0us6taRQY3MjRBukgY0",
  authDomain: "react-restaurant-app-3604c.firebaseapp.com",
  databaseURL: "https://react-restaurant-app-3604c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-restaurant-app-3604c",
  storageBucket: "react-restaurant-app-3604c.appspot.com",
  messagingSenderId: "874864386530",
  appId: "1:874864386530:web:b313a29b2efee2c8f259bb"
};
//init firebase app
initializeApp(firebaseConfig) 

//init firebase db
export const db=getFirestore()

//init auth
export const auth=getAuth()

//reacl time auth status

