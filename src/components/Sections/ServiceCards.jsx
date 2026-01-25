import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';



export default function ServiceCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Animate EVERY TIME component enters or exits viewport
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // Reset when leaving viewport
          }
        });
      },
      {
        threshold: 0.15,
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

  const handleLearnMore = (slug) => {
    navigate(`/services/${slug}`);
  };

  // Blue gradient variations for cards
  const blueGradients = [
    'from-sky-400 via-sky-500 to-blue-600',      // Light sky blue
    'from-blue-400 via-blue-500 to-blue-700',    // Medium blue
    'from-cyan-400 via-sky-500 to-blue-600',     // Cyan to blue
    'from-sky-500 via-blue-500 to-indigo-600',   // Sky to indigo
    'from-blue-500 via-cyan-500 to-sky-600',     // Blue to cyan
    'from-indigo-400 via-blue-500 to-sky-600',   // Indigo to sky
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Enhanced Animations */}
        <div className="text-center mb-16">
          {/* Badge - Scale + Fade */}
          <div 
            className={`inline-block px-6 py-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-600 rounded-full text-sm font-bold mb-6 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-8 scale-75'
            }`}
          >
            ✨ OUR SERVICES
          </div>

          {/* Title - Slide from top */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent transition-all duration-1000 delay-100 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-10'
            }`}
          >
            Everything You Need in One Platform
          </h2>

          {/* Description - Fade + Slide */}
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            Powerful features designed to make cloud storage simple, secure, and scalable for teams of any size.
          </p>

          {/* Decorative Line */}
          <div 
            className={`w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mt-6 rounded-full transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 scale-x-100' 
                : 'opacity-0 scale-x-0'
            }`}
          />
        </div>

        {/* Flip Cards Grid - Staggered entrance with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const gradient = blueGradients[index % blueGradients.length];
            const delay = 300 + (index * 150);

            return (
              <div 
                key={index} 
                className={`flip-card h-80 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100 blur-0' 
                    : 'opacity-0 translate-y-16 scale-90 blur-sm'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flip-card-inner">
                  
                  {/* Front Side - Enhanced Design */}
                  <div className={`flip-card-front bg-gradient-to-br ${gradient} rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-2xl relative overflow-hidden group`}>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 -left-4 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
                      <div className="absolute top-0 -right-4 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
                      <div className="absolute -bottom-8 left-20 w-40 h-40 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
                    </div>

                    {/* Icon Container with Advanced Styling */}
                    <div className="relative mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      {/* Glowing Ring */}
                      <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl animate-pulse"></div>
                      
                      {/* Icon Background */}
                      <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border-2 border-white/30 shadow-lg">
                        {/* Inner Glow */}
                        <div className="absolute inset-2 bg-gradient-to-br from-white/40 to-transparent rounded-xl"></div>
                        
                        {/* Icon */}
                        <service.icon className="relative w-12 h-12 text-white drop-shadow-lg" strokeWidth={2.5} />
                      </div>

                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/70 rounded-full animate-bounce"></div>
                    </div>

                    {/* Title */}
                    <h3 className="relative text-2xl font-bold text-center drop-shadow-lg">
                      {service.title}
                    </h3>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      <span>Hover to explore</span>
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>

                  {/* Back Side - Enhanced Design - FIXED HEIGHT ISSUE */}
                  <div className="flip-card-back bg-white rounded-2xl px-6 py-5 shadow-2xl border-2 border-sky-100 flex flex-col relative overflow-hidden">
                    
                    {/* Background Decoration */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-bl-[100px]`}></div>
                    
                    {/* Icon Header - Reduced spacing */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <service.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description - Limited to 2 lines */}
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Features List - Compact spacing */}
                    <ul className="space-y-1.5 mb-4 flex-grow">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="leading-tight line-clamp-2">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button - Compact */}
                    <button
                      onClick={() => handleLearnMore(service.slug)}
                      className={`w-full bg-gradient-to-r ${gradient} text-white py-2.5 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 mt-auto`}
                    >
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Flip Card & Animation Styles */}
      <style jsx='true'>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Blob Animation */
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}