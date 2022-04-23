
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCelJPd_jU_SpE8qeETi0B5VmEAy4-QYtQ",
  authDomain: "idrive-production.firebaseapp.com",
  projectId: "idrive-production",
  storageBucket: "idrive-production.appspot.com",
  messagingSenderId: "530582245930",
  appId: "1:530582245930:web:8818708544f722bf922953"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);