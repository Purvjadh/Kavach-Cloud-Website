import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import KavachCloudLogo from '../../assets/images/KavachCloudLogo.png';

const Footer = () => {
  // Social Links
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/kavachcloud', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, url: 'https://instagram.com/kavachcloud', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, url: 'https://twitter.com/kavachcloud', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, url: 'https://linkedin.com/company/kavachcloud', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, url: 'https://youtube.com/@kavachcloud', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  // Quick Links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Services List - Split into two columns
  const servicesColumn1 = [
    { name: "Advanced Reverse Engineering", slug: "advanced-reverse-engineering" },
    { name: "Malware Development & Analysis", slug: "malware-development-analysis" },
    { name: "Penetration Testing", slug: "penetration-testing" },
    { name: "Incident Response & Forensics", slug: "incident-response-forensics" },
    { name: "Red Team & Social Engineering", slug: "red-team-social-engineering" },
    { name: "Cloud Security Testing", slug: "cloud-security-testing" },
    { name: "Threat Hunting & Malware Analysis", slug: "threat-hunting-malware-analysis" },
    { name: "Source Code Review", slug: "source-code-review" },
    { name: "Network Security Assessment", slug: "network-security-assessment" }
  ];

  const servicesColumn2 = [
    { name: "Active Directory Security", slug: "active-directory-security" },
    { name: "Compliance Readiness", slug: "compliance-readiness" },
    { name: "Zero Trust Security", slug: "zero-trust-security" },
    { name: "DevSecOps Integration", slug: "devsecops-integration" },
    { name: "Mobile & IoT Security", slug: "mobile-iot-security" },
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "vCISO Services", slug: "vciso-services" },
    { name: "Security Training", slug: "security-training" }
  ];

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918968883627';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:kavachcloud@gmail.com';
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white w-full">
      {/* Main Footer Content */}
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info Section - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-7">
            <Link to="/" className="flex items-center space-x-4 group w-fit">
              {/* Logo */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300 flex-shrink-0">
               <img src={KavachCloudLogo} alt="Kavach Cloud Logo" className='rounded-full'/>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                Kavach Cloud
              </h3>
            </Link>
            
            <p className="text-gray-400 text-base leading-relaxed pr-4">
              Secure cloud storage solutions for businesses of all sizes with enterprise-grade security and reliability.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-all group w-full text-left"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-lg flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-base font-medium">+91 896 888 3627</span>
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="flex items-center space-x-4 text-gray-300 hover:text-cyan-400 transition-all group w-full text-left"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition-all shadow-lg flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-base font-medium break-all">kavachcloud@gmail.com</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-8 text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 hover:translate-x-2 transition-all text-base inline-block font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 1 - Takes 3.5 columns */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold mb-8 text-cyan-400">
              Our Services
            </h4>
            <ul className="space-y-4">
              {servicesColumn1.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-cyan-400 hover:translate-x-2 transition-all text-base inline-block font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 2 - Takes 3.5 columns */}
          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold mb-8 text-cyan-400">
              More Services
            </h4>
            <ul className="space-y-4">
              {servicesColumn2.map((service, index) => (
                <li key={index}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-cyan-400 hover:translate-x-2 transition-all text-base inline-block font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 w-full">
        <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-base text-center md:text-left">
              Copyright © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Kavach Cloud</span> | Secure Cloud Solutions. All Rights Reserved
            </p>
            <div className="flex space-x-8 text-base">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;