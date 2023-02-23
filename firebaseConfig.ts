import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


/* var admin = require("firebase-admin");

var serviceAccount = require("firebase-adminsdk-8253u@next-crud-2db45.iam.gserviceaccount.com");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); */


const firebaseConfig = {
    apiKey: "AIzaSyB-_c4up93fHvC307KEBieiUc9hJis1fOE",
    // authDomain: "next-crud-2db45.firebaseapp.com",
    projectId: "next-crud-2db45",
    storageBucket: "evernoteclone-7682f.appspot.com",
    messagingSenderId: "397356677508",
    // appId: "1:332984082327:web:ae2776c3a56f4d98816ed2"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
