
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/Sidebar';

const Index: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <HeroSection />
          </div>
          
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
