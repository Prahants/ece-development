import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Phone, Calendar, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { BookingModal } from './BookingModal';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 150; // offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
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
            <a href="#home" className={`${activeSection === 'home' ? 'text-primary border-b-2 border-primary font-semibold' : 'hover:text-primary transition-colors'} pb-1`}>Home</a>
            <a href="#features" className={`${activeSection === 'features' ? 'text-primary border-b-2 border-primary font-semibold' : 'hover:text-primary transition-colors'} pb-1`}>Features</a>
            <a href="#about" className={`${activeSection === 'about' ? 'text-primary border-b-2 border-primary font-semibold' : 'hover:text-primary transition-colors'} pb-1`}>About Us</a>
            <a href="#achievements" className={`${activeSection === 'achievements' ? 'text-primary border-b-2 border-primary font-semibold' : 'hover:text-primary transition-colors'} pb-1`}>Achievements</a>
            <a href="#contact" className={`${activeSection === 'contact' ? 'text-primary border-b-2 border-primary font-semibold' : 'hover:text-primary transition-colors'} pb-1`}>Contact</a>
          </div>

          {/* Right side CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop: Contact Button with Dropdown */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#5a4fcf] hover:bg-[#4a40b8] text-white text-sm font-bold rounded-lg transition-all shadow-sm hover:shadow-md group cursor-pointer"
              >
                Contact Our Team
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl shadow-indigo-200/50 border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-1">
                      <a
                        href="#contact"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-indigo-50 hover:text-[#5a4fcf] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-[#5a4fcf] flex items-center justify-center transition-colors">
                          <MessageSquare className="w-4 h-4 text-[#5a4fcf] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">Send Message</div>
                          <div className="text-[11px] text-gray-400 font-medium">Fill out contact form</div>
                        </div>
                      </a>
                      <div className="border-t border-gray-100 mx-3"></div>
                      <button
                        onClick={() => { setIsDropdownOpen(false); setIsBookingOpen(true); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-indigo-50 hover:text-[#5a4fcf] transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 group-hover:bg-[#5a4fcf] flex items-center justify-center transition-colors">
                          <Calendar className="w-4 h-4 text-[#5a4fcf] group-hover:text-white transition-colors" />
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-sm">Book a Call</div>
                          <div className="text-[11px] text-gray-400 font-medium">Schedule a meeting</div>
                        </div>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
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
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={`${activeSection === 'home' ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary transition-colors py-2`}>Home</a>
                <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className={`${activeSection === 'features' ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary transition-colors py-2`}>Features</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={`${activeSection === 'about' ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary transition-colors py-2`}>About Us</a>
                <a href="#achievements" onClick={() => setIsMobileMenuOpen(false)} className={`${activeSection === 'achievements' ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary transition-colors py-2`}>Achievements</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={`${activeSection === 'contact' ? 'text-primary font-bold' : 'text-gray-600'} hover:text-primary transition-colors py-2`}>Contact</a>
                
                <div className="border-t border-gray-100 pt-3 space-y-2">
                  <a 
                    href="#contact" 
                    onClick={() => setIsMobileMenuOpen(false)} 
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl text-gray-700 font-semibold text-sm hover:bg-indigo-50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#5a4fcf]" />
                    Send Message
                  </a>
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); setIsBookingOpen(true); }}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-[#5a4fcf] hover:bg-[#4a40b8] rounded-xl text-white font-semibold text-sm transition-all shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Call
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};
