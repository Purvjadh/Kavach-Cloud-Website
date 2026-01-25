import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, Shield, TrendingUp, Award } from 'lucide-react';

export default function UserStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
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

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Chief Security Officer",
      company: "FinTech Global",
      initials: "SJ",
      gradient: "from-sky-400 to-blue-500",
      rating: 5,
      text: "Kavach's penetration testing uncovered critical vulnerabilities we didn't know existed. Their red team operations are incredibly thorough and professional. We now have complete confidence in our security posture.",
      highlight: "Zero breaches in 2 years",
      stat: "100%",
      statLabel: "Threat Detection"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "CloudScale Technologies",
      initials: "MC",
      gradient: "from-blue-500 to-cyan-500",
      rating: 5,
      text: "The incident response from Kavach was exceptional. When we faced a potential breach, their team acted within minutes. Their malware analysis capabilities saved us from a major disaster. True cybersecurity experts.",
      highlight: "15min response time",
      stat: "99.9%",
      statLabel: "Uptime Protected"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of IT Security",
      company: "MedSecure Healthcare",
      initials: "ER",
      gradient: "from-cyan-400 to-sky-500",
      rating: 5,
      text: "Kavach's comprehensive security assessment revealed gaps we never anticipated. Their threat intelligence and forensics work is world-class. They don't just find problems—they provide actionable solutions.",
      highlight: "95% risk reduction",
      stat: "24/7",
      statLabel: "Monitoring"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-br from-white via-sky-50 to-blue-50 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-6 py-3 bg-sky-100 border border-sky-300 rounded-full text-sm font-bold mb-6 backdrop-blur-sm transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Star className="w-4 h-4 text-sky-600 fill-sky-600" />
            <span className="text-sky-700">CLIENT SUCCESS STORIES</span>
          </div>
          
          <h2 
            className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-100 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-gray-900">Trusted by </span>
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Security Leaders
            </span>
          </h2>
          
          <p 
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            See how leading organizations protect their digital assets with Kavach's elite cybersecurity services
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div 
            className={`relative transition-all duration-1200 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-95'
            }`}
          >
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-300/30 to-blue-400/30 rounded-3xl blur-3xl"></div>
            
            {/* Card */}
            <div className="relative bg-white rounded-3xl border-2 border-sky-200 shadow-2xl overflow-hidden">
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 opacity-0 hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 w-32 h-32 opacity-5">
                <Quote className="w-full h-full text-sky-500" strokeWidth={1} />
              </div>

              <div className="relative z-10 p-8 md:p-12 lg:p-16">
                
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  
                  {/* Left: User Info */}
                  <div className="md:col-span-1 flex flex-col items-center md:items-start">
                    
                    {/* Avatar with gradient border */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-2xl blur-lg opacity-40 animate-pulse-slow`}></div>
                      <div className={`relative w-24 h-24 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-2xl flex items-center justify-center border-4 border-white shadow-xl`}>
                        <span className="text-white text-3xl font-bold">
                          {testimonials[currentIndex].initials}
                        </span>
                      </div>
                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-4 border-white shadow-lg">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sky-600 font-semibold mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse-slow" 
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Key Stat */}
                    <div className="mt-8 bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-4 w-full shadow-md">
                      <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-1">
                        {testimonials[currentIndex].stat}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {testimonials[currentIndex].statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Right: Testimonial Content */}
                  <div className="md:col-span-2 space-y-6">
                    
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light">
                      <span className="text-sky-500 text-4xl font-serif">"</span>
                      {testimonials[currentIndex].text}
                      <span className="text-sky-500 text-4xl font-serif">"</span>
                    </blockquote>

                    {/* Highlight Badge */}
                    <div className="flex flex-wrap gap-3">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-blue-100 border-2 border-sky-300 px-5 py-3 rounded-full shadow-md">
                        <TrendingUp className="w-5 h-5 text-sky-600" />
                        <span className="text-sky-700 font-semibold">
                          {testimonials[currentIndex].highlight}
                        </span>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-4 pt-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-14 h-14 rounded-full bg-gray-100 border-2 border-sky-200 hover:bg-gradient-to-br hover:from-sky-400 hover:to-blue-500 hover:border-transparent text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg group"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </button>
                      
                      <button
                        onClick={nextTestimonial}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/50 group"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </button>

                      {/* Dots Indicator */}
                      <div className="flex gap-2 ml-auto">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setCurrentIndex(index);
                              setIsAutoPlaying(false);
                            }}
                            className={`h-2 rounded-full transition-all duration-500 ${
                              index === currentIndex 
                                ? 'bg-gradient-to-r from-sky-400 to-blue-500 w-12' 
                                : 'bg-gray-300 hover:bg-gray-400 w-2'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-600 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: Star, value: "4.9/5", label: "Client Satisfaction", gradient: "from-yellow-400 to-orange-500", bg: "from-yellow-50 to-orange-50", border: "border-yellow-300" },
            { icon: Shield, value: "500+", label: "Protected Organizations", gradient: "from-sky-400 to-blue-500", bg: "from-sky-50 to-blue-50", border: "border-sky-300" },
            { icon: Award, value: "98%", label: "Success Rate", gradient: "from-green-400 to-emerald-500", bg: "from-green-50 to-emerald-50", border: "border-green-300" }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ transitionDelay: `${(index + 6) * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-white rounded-2xl border-2 ${stat.border} group-hover:shadow-2xl p-8 text-center transition-all duration-500 transform group-hover:scale-105 shadow-lg`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-xl mb-4 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}