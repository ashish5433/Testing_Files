
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
import {getFirestore} from '@firebase/firestore'

import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVp3NNK6dRzox6CbH7Lkn1asW8kxxXOVE",
  authDomain: "imageupload-83d5d.firebaseapp.com",
  projectId: "imageupload-83d5d",
  storageBucket: "imageupload-83d5d.appspot.com",
  messagingSenderId: "697179914318",
  appId: "1:697179914318:web:715fdfeea344a9e9f8031f"
};


export const app = initializeApp(firebaseConfig);


//todo Firestore Connection...
export const db=getFirestore(app)

export const storage = getStorage(app)

export const auth =getAuth(app)

export const provider=new GoogleAuthProvider()