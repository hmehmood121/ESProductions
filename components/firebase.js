// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyC8LCx_Jf18q3_IGlMtRNMEKv5E5h9FSe8",
  authDomain: "esproductionz-5289a.firebaseapp.com",
  projectId: "esproductionz-5289a",
  storageBucket: "esproductionz-5289a.appspot.com",
  messagingSenderId: "1011836749379",
  appId: "1:1011836749379:web:4ef4e245dbcb85a9e436f6"
};



const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };

