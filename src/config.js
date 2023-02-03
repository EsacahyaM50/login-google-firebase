import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCp2SorSRHipxAFQZpqOrf_cvvVvEf_ZLc",
  authDomain: "login-esa-7dfee.firebaseapp.com",
  projectId: "login-esa-7dfee",
  storageBucket: "login-esa-7dfee.appspot.com",
  messagingSenderId: "574352072218",
  appId: "1:574352072218:web:486aaeb00717fd36007ba3",
  measurementId: "G-2MZ31Y605Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)