import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationLinks } from '../data/mockData';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import TopLogo from '../../src/white_transparent_logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-black/95 md-bg-gradient-to-b md-from-black/80 md-via-black/40 md-to-transparent backdrop-blur-md md-backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={TopLogo}
              alt="KlarityIQ"
              className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md-flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md-block">
            <Button
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-medium px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-300"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md-hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md-hidden bg-black/98 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white font-medium py-2 rounded-md"
              asChild
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;