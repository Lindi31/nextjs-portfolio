import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'; // Importieren Sie die Authentifizierungs-Funktionen

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG7SJZzlpeLN3T9Z2aChlfa7kAaCL4IXg",
  authDomain: "arlindsecke.firebaseapp.com",
  projectId: "arlindsecke",
  storageBucket: "arlindsecke.appspot.com",
  messagingSenderId: "765475146270",
  appId: "1:765475146270:web:9a9b4741d90445bf5f3c0f",
  measurementId: "G-8Z37PGFTDS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialisieren Sie die Authentifizierungsfunktionen

export default app;
export { auth }; // Exportieren Sie die auth-Funktion separat