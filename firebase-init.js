import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your project's universal Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbnPpcIt88B0jIAoLUdC71zmQDvR_fdu8",
  authDomain: "physmathacademy-722b3.firebaseapp.com",
  projectId: "physmathacademy-722b3",
  storageBucket: "physmathacademy-722b3.appspot.com",
  messagingSenderId: "1093640992262",
  appId: "1:1093640992262:web:3552a4205dc5df869a84da", // Using the Kaffetish App ID as the primary
};

// Initialize Firebase ONCE and export the services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

