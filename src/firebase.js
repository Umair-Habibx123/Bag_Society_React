import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWgqd3RxEEvKIxQljXg2qwWpGTVR9hIkY",
  authDomain: "bag-society-2d720.firebaseapp.com",
  projectId: "bag-society-2d720",
  storageBucket: "bag-society-2d720.firebasestorage.app",
  messagingSenderId: "1010677507847",
  appId: "1:1010677507847:web:cd2245932c6befc9db47a2",
  measurementId: "G-FTH5B55BYN",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
