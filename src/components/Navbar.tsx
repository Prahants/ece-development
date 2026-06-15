import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <nav className="relative flex items-center justify-between py-3 px-4 sm:px-8 max-w-[1400px] mx-auto w-full">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="ECE Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col tracking-widest font-black text-xs leading-none text-gray-900 gap-0.5">
            <span>EVOLUTIONARY</span>
            <span>COMPUTATION</span>
            <span>ENTERPRISES</span>
          </div>
        </div>

        {/* Centered Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <a href="#" className="text-primary border-b-2 border-primary pb-1 font-semibold">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Features</a>
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
          <a href="#" className="hover:text-primary transition-colors">Achievements</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Right side CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden md:block px-6 py-2.5 bg-[#5a4fcf] hover:bg-[#4a40b8] text-white text-sm font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
            Contact Our Team
          </button>
          
          <button 
            className="md:hidden p-2 -mr-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              <a href="#" className="text-primary font-semibold py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2">Features</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2">About Us</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2">Achievements</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors py-2">Contact</a>
              <button className="w-full px-6 py-3 mt-2 bg-[#5a4fcf] hover:bg-[#4a40b8] text-white text-sm font-bold rounded-lg transition-all shadow-sm hover:shadow-md">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
