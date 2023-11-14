"use client";
// Importieren Sie die notwendigen Bibliotheken und Komponenten
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

// Definieren Sie Ihre Navigationslinks
const navLinks = [
  { title: 'Über Mich', path: '#about' },
  { title: 'Projekte', path: '#projects' },
  { title: 'Kontakt', path: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Animationsvarianten für das Menü
  const menuVariants = {
    open: { opacity: 1, scale: 1, transition: { stiffness: 20, duration: 0.3 } },
    closed: { opacity: 0, scale: 0.95, transition: { stiffness: 20, duration: 0.3 } },
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
