import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;

      // Show button when scrolled down more than 300px
      if (currentScrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bg-gradient-to-r from-sky-500 to-blue-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out group ${
        isVisible 
          ? 'right-6 opacity-100 translate-x-0' 
          : 'right-6 opacity-0 translate-x-20 pointer-events-none'
      } ${
        isScrollingDown 
          ? 'bottom-6' 
          : 'bottom-20'
      }`}
      aria-label="Scroll to top"
    >
      {/* Animated rings */}
      <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-20"></span>
      <span className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-30"></span>
      
      {/* Icon */}
      <ChevronUp className="w-5 h-5 relative z-10 group-hover:animate-bounce transition-transform group-hover:scale-110" />
      
      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md"></span>
    </button>
  );
};

export default ScrollToTopButton;