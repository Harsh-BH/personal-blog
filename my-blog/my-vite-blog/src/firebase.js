import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2EtUb8wORV9-cA7RL3-TlidR2YX1NBks",
  authDomain: "blog-a27b3.firebaseapp.com",
  projectId: "blog-a27b3",
  storageBucket: "blog-a27b3.appspot.com",
  messagingSenderId: "1031384312970",
  appId: "1:1031384312970:web:3350815c6b3f95afc49173",
  measurementId: "G-S4QF95K58R",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
