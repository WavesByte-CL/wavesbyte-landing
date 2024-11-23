import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-rEk49h9E8haoFUnbYWMaWAgfRz6Knmg",
  authDomain: "wavesbyte-landing.firebaseapp.com",
  projectId: "wavesbyte-landing",
  storageBucket: "wavesbyte-landing.firebasestorage.app",
  messagingSenderId: "397243020960",
  appId: "1:397243020960:web:bd802335f3ce21404f3bc5",
  measurementId: "G-8NHKMRDQS6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
