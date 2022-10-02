import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCm5Kk7KYDIapO_Mib-6ncQPzLWT7JdXVE",
  authDomain: "codiyapa-867d1.firebaseapp.com",
  projectId: "codiyapa-867d1",
  storageBucket: "codiyapa-867d1.appspot.com",
  messagingSenderId: "481771576799",
  appId: "1:481771576799:web:4f31f1006725bef841386a",
  measurementId: "G-HH1VMYVDH9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();