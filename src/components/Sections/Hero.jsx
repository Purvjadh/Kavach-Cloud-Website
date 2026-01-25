import { useEffect, useRef, useState } from 'react';
import { Shield, Lock, Server, Zap, ChevronRight, CheckCircle2, Search, Bug, Activity, Eye, Terminal, Code, AlertTriangle, Fingerprint, Network } from 'lucide-react';
import {Link} from 'react-router-dom';
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
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

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern-cyber opacity-10"></div>
      
      {/* Animated Gradient Orbs */}
      <div className={`absolute inset-0 transition-all duration-1500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-float-2"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-float-3"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-float-4"></div>
      </div>

      {/* Scanning Lines Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-scan-line"></div>
      </div>

      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="space-y-5 lg:pr-8">
            
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-sm transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}>
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-semibold">Elite Cybersecurity Operations</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className={`block text-white transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Defend Your Digital
                </span>
                
                <span className={`block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Assets with Kavach
                </span>
              </h1>

              <div className={`h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>

            {/* Description */}
            <p className={`text-base md:text-lg text-gray-300 leading-relaxed transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Advanced cybersecurity services including penetration testing, malware analysis, incident response, and red team operations. Protecting your infrastructure with precision and expertise.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Terminal, text: 'Penetration Testing', delay: 600 },
                { icon: Bug, text: 'Malware Analysis', delay: 700 },
                { icon: Zap, text: 'Incident Response', delay: 800 },
                { icon: AlertTriangle, text: 'Red Team Operations', delay: 900 }
              ].map((feature, idx) => (
                <div key={idx} className={`flex items-center gap-3 transition-all duration-800 ease-out ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`} style={{ transitionDelay: `${feature.delay}ms` }}>
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-base shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 overflow-hidden transition-all duration-1000 ease-out delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}>
                <Link to='/contact'>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Assessment
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button 
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`group relative bg-transparent border-2 border-cyan-500 text-cyan-400 px-6 py-3 rounded-xl font-bold text-base hover:bg-cyan-500/10 shadow-md hover:shadow-lg transition-all duration-1000 ease-out delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
              }`}>
                <span className="flex items-center justify-center gap-2">
                  Our Services
                  <Shield className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-1000 ease-out delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-xs font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-xs font-medium">CREST Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-xs font-medium">OSCP Certified</span>
              </div>
            </div>
          </div>

          {/* Right - Cybersecurity Operations Dashboard */}
          <div className="relative w-full h-full min-h-[600px] lg:min-h-[700px] flex items-center justify-center">
            
            <div className={`relative w-full max-w-xl h-full transition-all duration-1200 ease-out delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              
              {/* Main Vertical Stack */}
              <div className="absolute inset-0 flex flex-col justify-between py-8">
                
                {/* Top Section - Threat Intelligence */}
                <div className="space-y-4">
                  {/* Threat Intel Header */}
                  <div className={`flex justify-center transition-all duration-1000 ease-out delay-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                  }`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500 rounded-3xl blur-2xl opacity-30"></div>
                      <div className="relative bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl px-8 py-4 border-2 border-red-400 shadow-xl">
                        <div className="flex items-center gap-3">
                          <Eye className="w-10 h-10 text-white" />
                          <div>
                            <div className="text-white font-bold text-lg">Threat Intelligence</div>
                            <div className="text-red-100 text-xs">Real-time Monitoring</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines to Center */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-red-400 to-transparent"></div>
                  </div>
                </div>

                {/* Center Section - Main Security Hub */}
                <div className="relative flex justify-center">
                  
                  {/* Scanning rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 border-2 border-cyan-500/30 rounded-full animate-pulse-ring"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center animation-delay-1000">
                    <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full animate-pulse-ring"></div>
                  </div>

                  {/* Central Security Operations */}
                  <div className={`relative z-10 w-80 transition-all duration-1000 ease-out delay-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30"></div>
                      
                      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 border-2 border-cyan-500/50 shadow-2xl">
                        {/* Status Lights */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                            <div className="w-3 h-3 bg-cyan-300 rounded-full animate-pulse animation-delay-300"></div>
                            <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-600"></div>
                          </div>
                          <Shield className="w-6 h-6 text-cyan-400 opacity-80" />
                        </div>

                        {/* Active Operations */}
                        <div className="space-y-3 mb-4">
                          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <Terminal className="w-3 h-3 text-cyan-400" />
                              <span className="text-cyan-300 text-xs font-semibold">Penetration Test</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-3/4 animate-pulse-slow"></div>
                            </div>
                          </div>
                          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <Bug className="w-3 h-3 text-purple-400" />
                              <span className="text-purple-300 text-xs font-semibold">Malware Analysis</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full w-5/6 animate-pulse-slow animation-delay-500"></div>
                            </div>
                          </div>
                          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-2">
                            <div className="flex items-center gap-2 mb-1">
                              <AlertTriangle className="w-3 h-3 text-orange-400" />
                              <span className="text-orange-300 text-xs font-semibold">Red Team Ops</span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full w-2/3 animate-pulse-slow animation-delay-1000"></div>
                            </div>
                          </div>
                        </div>

                        {/* Center Shield */}
                        <div className="flex justify-center py-3">
                          <div className="relative">
                            <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-lg opacity-40 animate-pulse"></div>
                            <div className="relative bg-cyan-500/20 backdrop-blur-sm rounded-xl p-3 border border-cyan-400/50">
                              <Shield className="w-10 h-10 text-cyan-400" strokeWidth={2} />
                            </div>
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/20">
                            <div className="text-cyan-400 text-sm font-bold">24/7</div>
                            <div className="text-gray-400 text-xs">Monitoring</div>
                          </div>
                          <div className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/20">
                            <div className="text-cyan-400 text-sm font-bold">99.9%</div>
                            <div className="text-gray-400 text-xs">Success</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Side Floating Icons */}
                    {/* Left - Code Review */}
                    <div className={`absolute top-8 -left-16 transition-all duration-1000 ease-out delay-800 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl p-3 border-2 border-cyan-400 shadow-lg transform group-hover:scale-110 transition-transform">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Code Review
                        </div>
                      </div>
                    </div>

                    {/* Right - Reverse Engineering */}
                    <div className={`absolute top-8 -right-16 transition-all duration-1000 ease-out delay-900 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-indigo-400 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-3 border-2 border-indigo-400 shadow-lg transform group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-indigo-300 text-xs px-2 py-1 rounded border border-indigo-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Reverse Eng.
                        </div>
                      </div>
                    </div>

                    {/* Left Bottom - Network Security */}
                    <div className={`absolute bottom-8 -left-16 transition-all duration-1000 ease-out delay-1000 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 border-2 border-blue-400 shadow-lg transform group-hover:scale-110 transition-transform">
                          <Network className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-blue-300 text-xs px-2 py-1 rounded border border-blue-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Network Sec
                        </div>
                      </div>
                    </div>

                    {/* Right Bottom - Forensics */}
                    <div className={`absolute bottom-8 -right-16 transition-all duration-1000 ease-out delay-1100 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                    }`}>
                      <div className="relative group cursor-pointer">
                        <div className="absolute inset-0 bg-emerald-400 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl p-3 border-2 border-emerald-400 shadow-lg transform group-hover:scale-110 transition-transform">
                          <Fingerprint className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-emerald-300 text-xs px-2 py-1 rounded border border-emerald-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                          Forensics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Services Access */}
                <div className="space-y-4">
                  {/* Connection Line */}
                  <div className="flex justify-center">
                    <div className="w-0.5 h-12 bg-gradient-to-b from-transparent to-cyan-400"></div>
                  </div>

                  {/* Service Categories */}
                  <div className={`flex justify-center gap-4 transition-all duration-1000 ease-out delay-1200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {/* Cloud Security */}
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-3 border-2 border-blue-400 shadow-lg transform group-hover:scale-110 transition-transform">
                        <Server className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* IoT Security */}
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-purple-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-3 border-2 border-purple-400 shadow-lg transform group-hover:scale-110 transition-transform">
                        <Activity className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* VCISO */}
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-indigo-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-3 border-2 border-indigo-400 shadow-lg transform group-hover:scale-110 transition-transform">
                        <Lock className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Services Label */}
                  <div className="text-center">
                    <div className="inline-block bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/30 shadow-md">
                      <div className="text-cyan-400 text-sm font-semibold">Comprehensive Security Services</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.5; }
          50% { transform: translateY(-25px) translateX(-10px); opacity: 0.9; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-15px) translateX(15px); opacity: 0.7; }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-30px) translateX(-5px); opacity: 0.8; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }

        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.08); opacity: 0.6; }
        }

        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 4s ease-in-out infinite; }
        .animate-scan-line { animation: scan-line 3s ease-in-out infinite; }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .bg-grid-pattern-cyber {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}