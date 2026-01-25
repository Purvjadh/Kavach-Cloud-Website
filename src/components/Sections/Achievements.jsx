import { useState, useEffect, useRef } from 'react';
import { Users, FileText, Globe, Award } from 'lucide-react';
import StatCard from '../UI/StatCard.jsx';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
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

  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Active Users',
      description: 'Trusted by businesses worldwide',
      color: 'purple'
    },
    {
      icon: FileText,
      value: 10,
      suffix: 'M+',
      label: 'Files Stored',
      description: 'Securely stored and protected',
      color: 'blue'
    },
    {
      icon: Globe,
      value: 150,
      suffix: '+',
      label: 'Countries',
      description: 'Global reach and availability',
      color: 'indigo'
    },
    {
      icon: Award,
      value: 99.9,
      suffix: '%',
      label: 'Uptime SLA',
      description: 'Guaranteed reliability',
      color: 'pink'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400 text-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header - Fade + Scale */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            Trusted by Thousands Worldwide
          </h2>
          <p 
            className={`text-xl text-gray-100 max-w-2xl mx-auto transition-all duration-1000 delay-100 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            Join the growing community of businesses that rely on Kavach Cloud for their data storage needs.
          </p>
        </div>

        {/* Stats Grid - Scale up individually */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-out ${
                index === 0 ? 'delay-200' :
                index === 1 ? 'delay-300' :
                index === 2 ? 'delay-400' :
                'delay-500'
              } ${
                isVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-90'
              }`}
            >
              <StatCard 
                {...stat}
                isVisible={isVisible}
                delay={index * 100}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}