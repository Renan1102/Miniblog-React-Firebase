import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbLGCUyZOum_klTcXQeL1WezD_lU7rG24",
  authDomain: "miniblog-2a139.firebaseapp.com",
  projectId: "miniblog-2a139",
  storageBucket: "miniblog-2a139.firebasestorage.app",
  messagingSenderId: "217074258964",
  appId: "1:217074258964:web:6860735d26940ce54b4301",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
