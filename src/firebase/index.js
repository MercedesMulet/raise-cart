import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBp6PNKlyJd0FCbpyd4A_zFPSDEF8ijj9g",
    authDomain: "raise-mexico.firebaseapp.com",
    projectId: "raise-mexico",
    storageBucket: "raise-mexico.appspot.com",
    messagingSenderId: "91609113950",
    appId: "1:91609113950:web:c40f5d90e9c3fd2fab9bcf",
    measurementId: "G-2WTJYLZGJ0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getFirebase = () => app;

export { getFirestore, db };










