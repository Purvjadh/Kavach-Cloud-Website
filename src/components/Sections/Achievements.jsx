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
      { threshold: 0.3 }
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
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Join the growing community of businesses that rely on Kavach Cloud for their data storage needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-16 pt-16 border-t border-white/20">
          <p className="text-center text-gray-100 mb-8">Certified & Compliant</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="font-bold">ISO 27001</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="font-bold">SOC 2 Type II</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="font-bold">GDPR Compliant</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
              <span className="font-bold">HIPAA Ready</span>
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}

// function StatCard({ icon: Icon, value, suffix, label, description, color, isVisible, delay }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const increment = value / steps;
//     const stepDuration = duration / steps;

//     let currentCount = 0;
//     const timer = setInterval(() => {
//       currentCount += increment;
//       if (currentCount >= value) {
//         setCount(value);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(currentCount));
//       }
//     }, stepDuration);

//     return () => clearInterval(timer);
//   }, [isVisible, value]);

//   return (
//     <div 
//       className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
//       style={{ animationDelay: `${delay}ms` }}
//     >
//       {/* Icon */}
//       <div className={`w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
//         <Icon className="w-8 h-8 text-white" />
//       </div>

//       {/* Counter */}
//       <div className="text-5xl font-bold mb-2">
//         {isVisible ? (
//           <>
//             {count === value && value % 1 !== 0 ? value : Math.floor(count)}
//             {suffix}
//           </>
//         ) : (
//           '0' + suffix
//         )}
//       </div>

//       {/* Label */}
//       <div className="text-xl font-semibold mb-2">
//         {label}
//       </div>

//       {/* Description */}
//       <p className="text-gray-200 text-sm">
//         {description}
//       </p>

//       {/* Decorative element */}
//       <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
//     </div>
//   );
// }