
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="lg:fixed lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:mr-8 w-full lg:w-64 p-6 lg:p-8">
      {/* About Me Section */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-sm font-bold tracking-wider text-blue-400 mb-3">ABOUT ME</h2>
        <p className="text-gray-400 text-sm mb-2">
          A dedicated web developer with 5+ years of experience building modern web applications 
          and interfaces that users love.
        </p>
        <a href="#about" className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
          Learn More →
        </a>
      </div>

      {/* My Work Section */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-sm font-bold tracking-wider text-blue-400 mb-3">MY WORK</h2>
        <p className="text-gray-400 text-sm mb-2">
          Explore my latest projects and case studies showcasing my skills in web development.
        </p>
        <a href="#portfolio" className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center">
          Browse Portfolio →
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
        <h2 className="text-sm font-bold tracking-wider text-blue-400 mb-3">CONNECT</h2>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="social-icon">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="social-icon">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="social-icon">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="social-icon">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" aria-label="YouTube" className="social-icon">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" aria-label="GitHub" className="social-icon">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
