import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
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

  // Calculate stagger delay for each card
  const getDelay = (index) => {
    return `delay-${(index + 1) * 150}`;
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Fade in from top */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-4 scale-90'
            }`}
          >
            FEATURES
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-900 delay-100 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-6'
            }`}
          >
            Everything You Need in One Platform
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-900 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-6'
            }`}
          >
            Powerful features designed to make cloud storage simple, secure, and scalable for teams of any size.
          </p>
        </div>

        {/* Flip Cards Grid - Staggered entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flip-card h-80 transition-all duration-700 ${
                index === 0 ? 'delay-300' : 
                index === 1 ? 'delay-450' : 
                index === 2 ? 'delay-600' : 
                index === 3 ? 'delay-750' : 
                index === 4 ? 'delay-900' : 
                'delay-1000'
              } ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
            >
              <div className="flip-card-inner">
                
                {/* Front Side - Service Name */}
                <div className={`flip-card-front bg-gradient-to-br ${service.gradient} rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-xl`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Back Side - Service Details */}
                <div className="flip-card-back bg-white rounded-2xl px-8 py-4 shadow-xl border-2 border-gray-100 flex flex-col">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-2">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button
                    onClick={() => handleLearnMore(service.slug)}
                    className={`w-full bg-gradient-to-br ${service.gradient} text-white py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Flip Card Styles */}
      <style jsx='true'>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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

        /* Smooth delay classes */
        .delay-300 { transition-delay: 300ms; }
        .delay-450 { transition-delay: 450ms; }
        .delay-600 { transition-delay: 600ms; }
        .delay-750 { transition-delay: 750ms; }
        .delay-900 { transition-delay: 900ms; }
        .delay-1000 { transition-delay: 1000ms; }
      `}</style>
    </section>
  );
}