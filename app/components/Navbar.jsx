"use client";
// Importieren Sie die notwendigen Bibliotheken und Komponenten
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import SignInDialog from './SignIn';
import SignUpDialog from './SignUp';
import app, { auth } from '../firebase'; // Pfad zu Ihrer firebase.js-Datei


const navLinks = [
  { title: 'Über Mich', path: '#about' },
  { title: 'Projekte', path: '#projects' },
  { title: 'Kontakt', path: '#contact' },
];
const dialogVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3
    }
  }
};
const authLinks = [
  { title: 'Registrieren', dialog: 'signup' },
  { title: 'Login', dialog: 'signin' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeDialog, setActiveDialog] = useState(null);
  const [user, setUser] = useState(null);

  // Authentifizierungsstatus überwachen
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Cleanup-Abonnement, wenn die Komponente demontiert wird
    return () => unsubscribe();
  }, []);
  const menuVariants = {
    open: { opacity: 1, scale: 1, transition: { stiffness: 20, duration: 0.3 } },
    closed: { opacity: 0, scale: 0.95, transition: { stiffness: 20, duration: 0.3 } },
  };

  const openDialog = (dialog) => {
    setActiveDialog(dialog);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed w-full border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" passHref>
          <Image src="/images/logo.png" alt="logo" width={50} height={50} className="cursor-pointer" />
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        
        <div className="hidden md:block">
          <ul className="flex items-center space-x-8">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
        {user ? (
              <li>
                
                <button
                  onClick={handleSignOut}
                  className="text-sm text-[#ADB7BE] sm:text-xl rounded md:px-0 hover:text-white cursor-pointer"
                >Abmelden
                </button><span className="text-sm text-gray-300 absolute right-3 py-1">
              Eingeloggt als: {user.displayName || user.email} {/* Fallback auf die E-Mail, wenn kein displayName vorhanden ist */}
            </span>
              </li>
            ) : (
              authLinks.map((link, index) => (
                <li key={index}> 
                  <button
                    onClick={() => openDialog(link.dialog)}
                    className="text-sm text-[#ADB7BE] sm:text-xl rounded md:px-0 hover:text-white cursor-pointer"
                  >
                    {link.title}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-0 right-0 bg-[#121212] border-t border-[#33353F]"
          >
            <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
      <div className="flex flex-col items-center space-y-2 p-4"> {/* Container für Auth-Links */}
        {user ? (
          <button
            onClick={handleSignOut}
            className="text-sm text-[#ADB7BE] sm:text-xl rounded md:px-0 hover:text-white cursor-pointer"
          >
            Abmelden
          </button>
        ) : (
          authLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => openDialog(link.dialog)}
              className="text-sm text-[#ADB7BE] sm:text-xl rounded md:px-0 hover:text-white cursor-pointer"
            >
              {link.title}
            </button>
          ))
        )}
      </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence >
        {activeDialog === 'signin' && (
          <motion.div className="fixed inset-0 flex items-center justify-center place-self-center top-1 right-1 bottom-1 left-1"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dialogVariants}
          >
            <SignInDialog onClose={closeDialog} />
          </motion.div>
        )}
        {activeDialog === 'signup' && (
          <motion.div className="fixed inset-0 flex items-center justify-center place-self-center top-1 right-1 bottom-1 left-1"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dialogVariants}
          >
            <SignUpDialog onClose={closeDialog} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;