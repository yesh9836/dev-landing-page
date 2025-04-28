
import React, { useState } from 'react';
import { Menu, Code, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Code className="h-6 w-6 text-blue-500 mr-2" />
            <span className="text-white font-semibold text-lg">Developer X</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="hover-link font-medium">Home</a>
              <a href="#about" className="hover-link font-medium">About</a>
              <a href="#blog" className="hover-link font-medium">Blog</a>
              <a href="#portfolio" className="hover-link font-medium">Portfolio</a>
              <div className="relative group">
                <button className="hover-link font-medium flex items-center">
                  Pages <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 hidden group-hover:block">
                  <a href="#services" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Services</a>
                  <a href="#contact" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Contact</a>
                  <a href="#resume" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">Resume</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</a>
            <a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Blog</a>
            <a href="#portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Portfolio</a>
            <div className="block px-3 py-2 text-base font-medium">
              <span>Pages</span>
              <div className="pl-4 mt-2 space-y-1">
                <a href="#services" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</a>
                <a href="#contact" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</a>
                <a href="#resume" className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Resume</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
