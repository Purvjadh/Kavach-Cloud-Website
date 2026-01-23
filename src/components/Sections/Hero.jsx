import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/companyLogo.png';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of section is visible
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Heading - Fade in + Slide from left */}
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              Secure Cloud Storage
              <span 
                className={`block text-sky-500 transition-all duration-1000 delay-200 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-12'
                }`}
              >
                Made Simple
              </span>
            </h1>

            {/* Description - Fade in with delay */}
            <p 
              className={`text-xl text-gray-600 max-w-xl transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              Store, protect, and access your data with enterprise-grade security and reliability.
            </p>

            {/* Buttons - Staggered fade in from bottom */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact"
                className={`bg-sky-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition-all duration-1000 delay-500 text-center ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Get Started
              </Link>

              <Link 
                to="/services"
                className={`bg-transparent border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-500 hover:text-white transition-all duration-1000 delay-700 text-center ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right - Company Logo - Scale + Fade in */}
          <div className="flex items-center justify-center">
            <div 
              className={`w-full max-w-md transition-all duration-1000 delay-300 ${
                isVisible 
                  ? 'opacity-100 scale-100 rotate-0' 
                  : 'opacity-0 scale-75 -rotate-12'
              }`}
            >
              <img 
                src={companyLogo}
                alt="Kavach Cloud Logo"
                className="w-full h-auto drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <div class="text-center text-white p-8">
                        <div class="text-6xl font-bold mb-4">KC</div>
                        <div class="text-2xl font-semibold">Kavach Cloud</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}