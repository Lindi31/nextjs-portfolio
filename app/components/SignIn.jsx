import React, { useState } from 'react';
import app, { auth } from '../firebase'; // Pfad zu Ihrer firebase.js-Datei
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInDialog = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Anmeldung erfolgreich, Dialog schließen
      onClose();
    } catch (error) {
      // Fehlerbehandlung
      setError(error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black z-50">
      <div className="bg-gray-800 p-4 rounded-md shadow-lg w-full max-w-md mx-4">
        <h2 className="text-2xl font-semibold mb-4 text-white">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email...
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 placeholder-gray-500 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300 bg-gray-700 text-white"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Passwort...
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 placeholder-gray-500 border border-gray-600 rounded-md focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300 bg-gray-700 text-white"
              placeholder="Passwort"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>} {/* Fehlermeldung anzeigen */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="text-sm text-indigo-400 hover:text-indigo-500 cursor-pointer"
              onClick={() => onClose()}
            >
              Abbrechen
            </button>
            <button
              type="submit"
              className="ml-3 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Einloggen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInDialog;