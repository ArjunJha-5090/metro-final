import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader on route change
    setIsLoading(true);
    
    // Hide loader after 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location.pathname]); // trigger whenever the route changes

  // Only render when loading
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md transition-opacity duration-300">
      <div className="animate-pulse flex flex-col items-center">
        <img 
          src="/assets/images/logo-transparent.png" 
          alt="Loading Metro Food Court..." 
          className="w-32 h-32 md:w-48 md:h-48 object-contain mb-4" 
        />
        <h2 className="font-heading text-xl md:text-2xl text-secondary tracking-widest uppercase animate-bounce mt-4">
          Loading...
        </h2>
      </div>
    </div>
  );
};
