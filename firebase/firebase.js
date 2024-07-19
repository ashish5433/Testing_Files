
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import {getFirestore} from '@firebase/firestore'

import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {

  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: "AIzaSyAX4kqtJdo7lIbwLxGxFQozKHQ542dVSYU",
  authDomain: "kirai-4ed76.firebaseapp.com",
  projectId: "kirai-4ed76",
  storageBucket: "kirai-4ed76.appspot.com",
  messagingSenderId: "974545783393",
  appId: "1:974545783393:web:fbfd486596ab1d510f3820",
};


export const app = initializeApp(firebaseConfig);


//todo Firestore Connection...
export const db=getFirestore(app)

export const storage = getStorage(app)

export const auth =getAuth(app)

export const provider=new GoogleAuthProvider()