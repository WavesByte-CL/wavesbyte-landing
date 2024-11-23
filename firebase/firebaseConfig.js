import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhzLYJe-lLe8vmy0WwgfxIHbSckf2hBYU",
  authDomain: "wavesbytelanding.firebaseapp.com",
  projectId: "wavesbytelanding",
  storageBucket: "wavesbytelanding.appspot.com",
  messagingSenderId: "123180672283",
  appId: "1:123180672283:web:7e1a922f6cf3c21a951fbe",
  measurementId: "G-2F34XFMFB2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
