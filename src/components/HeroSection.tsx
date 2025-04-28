
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-2/3 mb-10 md:mb-0 md:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              I'm John, <span className="text-blue-500">a Web Developer</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              A passionate full-stack developer specialized in crafting modern, 
              responsive web applications with a focus on user experience and clean code.
              Let's build something amazing together.
            </p>
            <Button 
              className="group bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 w-14 h-14 flex items-center justify-center" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Content (Profile Image) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden border-4 border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="John's Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full -top-4 -left-4 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
