import { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Shield, Headphones } from 'lucide-react';

export default function ServicesCloud() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Entry and Exit animations
          setIsVisible(entry.isIntersecting);
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float-slow"></div>
      </div>

      {/* Animated gradient orbs */}
      <div className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header - Title splits and slides */}
        <div className="text-center mb-16 overflow-hidden">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 overflow-hidden">
              <span className={`inline-block transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-full'
              }`}>
                Comprehensive
              </span>
              {' '}
              <span className={`inline-block transition-all duration-1000 delay-150 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}>
                Cloud Solutions
              </span>
            </h2>
          </div>
          
          {/* Animated underline */}
          <div className="flex justify-center gap-2 mb-6">
            <div className={`h-1 w-12 bg-purple-600 rounded-full transition-all duration-500 delay-300 ease-in-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
            <div className={`h-1 w-12 bg-blue-600 rounded-full transition-all duration-500 delay-400 ease-in-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
            <div className={`h-1 w-12 bg-pink-600 rounded-full transition-all duration-500 delay-500 ease-in-out ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
          </div>
          
          <p 
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-800 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            Everything you need to store, protect, and access your data securely from anywhere in the world.
          </p>
        </div>

        {/* Services Grid - Cards coming from different directions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1 - Slides from LEFT */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 delay-200 ease-out border border-gray-100 hover:border-purple-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' 
                : 'opacity-0 -translate-x-32 translate-y-8 -rotate-6'
            }`}
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 ease-in-out"></div>
            
            <div className="relative bg-white rounded-2xl">
              {/* Icon with bounce */}
              <div className={`w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-800 delay-400 ease-out ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                <Cloud className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 ease-out">
                Cloud Storage
              </h3>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                Secure, scalable storage with automatic sync across all your devices. Store files up to 5TB per file.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {['Auto-sync across devices', 'Version history', 'File sharing & collaboration'].map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${500 + idx * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300 ease-in-out"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 2 - Drops from TOP */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 delay-300 ease-out border border-gray-100 hover:border-blue-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' 
                : 'opacity-0 translate-x-0 -translate-y-32 rotate-3'
            }`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 ease-in-out"></div>
            
            <div className="relative bg-white rounded-2xl">
              <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-800 delay-500 ease-out ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                <Server className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 ease-out">
                Auto Backup
              </h3>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                Never lose data again with continuous automatic backups. Set it once and forget about it.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {['Scheduled backups', 'Incremental backup', 'One-click restore'].map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + idx * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300 ease-in-out"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 3 - Slides from RIGHT */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 delay-400 ease-out border border-gray-100 hover:border-indigo-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' 
                : 'opacity-0 translate-x-32 translate-y-8 rotate-6'
            }`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 ease-in-out"></div>
            
            <div className="relative bg-white rounded-2xl">
              <div className={`w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-800 delay-600 ease-out ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 ease-out">
                Advanced Security
              </h3>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                Military-grade AES-256 encryption, two-factor authentication, and zero-knowledge architecture.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {['End-to-end encryption', '2FA authentication', 'SOC 2 compliant'].map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${700 + idx * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300 ease-in-out"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Service 4 - Rises from BOTTOM */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 delay-500 ease-out border border-gray-100 hover:border-pink-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' 
                : 'opacity-0 translate-x-0 translate-y-32 -rotate-3'
            }`}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500 ease-in-out"></div>
            
            <div className="relative bg-white rounded-2xl">
              <div className={`w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg transition-all duration-800 delay-700 ease-out ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-90'
              } group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl`}>
                <Headphones className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 ease-out">
                24/7 Support
              </h3>
              
              <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300 ease-in-out">
                Expert support team available round the clock via chat, email, or phone to help you anytime.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                {['Live chat support', 'Priority assistance', 'Knowledge base'].map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex items-center gap-2 transition-all duration-600 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${800 + idx * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full group-hover:w-2 group-hover:h-2 transition-all duration-300 ease-in-out"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 ease-out">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.25; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}