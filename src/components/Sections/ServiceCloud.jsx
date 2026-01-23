import { useEffect, useRef, useState } from 'react';
import { Cloud, Server, Shield, Headphones } from 'lucide-react';

export default function ServicesCloud() {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Fade in from top */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Comprehensive Cloud Solutions
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-8'
            }`}
          >
            Everything you need to store, protect, and access your data securely from anywhere in the world.
          </p>
        </div>

        {/* Services Grid - Staggered card animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Service 1 - Cloud Storage */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-300 border border-gray-100 hover:border-purple-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition">
                Cloud Storage
              </h3>
              
              <p className="text-gray-600 mb-4">
                Secure, scalable storage with automatic sync across all your devices. Store files up to 5TB per file.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  Auto-sync across devices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  Version history
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  File sharing & collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 - Auto Backup */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-500 border border-gray-100 hover:border-blue-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition">
                Auto Backup
              </h3>
              
              <p className="text-gray-600 mb-4">
                Never lose data again with continuous automatic backups. Set it once and forget about it.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Scheduled backups
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  Incremental backup
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  One-click restore
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 - Advanced Security */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-700 border border-gray-100 hover:border-indigo-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition">
                Advanced Security
              </h3>
              
              <p className="text-gray-600 mb-4">
                Military-grade AES-256 encryption, two-factor authentication, and zero-knowledge architecture.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  End-to-end encryption
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  2FA authentication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  SOC 2 compliant
                </li>
              </ul>
            </div>
          </div>

          {/* Service 4 - 24/7 Support */}
          <div 
            className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 delay-900 border border-gray-100 hover:border-pink-300 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Headphones className="w-8 h-8 text-pink-600" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-600 transition">
                24/7 Support
              </h3>
              
              <p className="text-gray-600 mb-4">
                Expert support team available round the clock via chat, email, or phone to help you anytime.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                  Live chat support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                  Priority assistance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-pink-600 rounded-full"></div>
                  Knowledge base
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}