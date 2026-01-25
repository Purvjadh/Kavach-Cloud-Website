import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Youtube, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/images/kavachCloudLogo.png'; // Adjust path as needed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we need to scroll to services section after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToServices) {
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Social Links
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube' }
  ];

  // Services dropdown items
  const servicesDropdown = [
    { name: "Advanced Reverse Engineering", slug: "advanced-reverse-engineering" },
    { name: "Malware Development & Analysis", slug: "malware-development-analysis" },
    { name: "Penetration Testing", slug: "penetration-testing" },
    { name: "Incident Response & Forensics", slug: "incident-response-forensics" },
    { name: "Red Team & Social Engineering", slug: "red-team-social-engineering" },
    { name: "Cloud Security Testing", slug: "cloud-security-testing" },
    { name: "Threat Hunting & Malware Analysis", slug: "threat-hunting-malware-analysis" },
    { name: "Source Code Review", slug: "source-code-review" },
    { name: "Network Security Assessment", slug: "network-security-assessment" },
    { name: "Active Directory Security", slug: "active-directory-security" },
    { name: "Compliance Readiness", slug: "compliance-readiness" },
    { name: "Zero Trust Security", slug: "zero-trust-security" },
    { name: "DevSecOps Integration", slug: "devsecops-integration" },
    { name: "Mobile & IoT Security", slug: "mobile-iot-security" },
    { name: "Threat Intelligence", slug: "threat-intelligence" },
    { name: "vCISO Services", slug: "vciso-services" },
    { name: "Security Training", slug: "security-training" }
  ];

  // Navigation Items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/',
      isScroll: true,
      hasDropdown: true,
      dropdownItems: servicesDropdown
    },
    { name: 'Product', path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  // Function to handle Services link click (smooth scroll)
  const handleServicesClick = (e) => {
    e.preventDefault();
    
    // Close mobile menu and dropdown immediately
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    
    // If not on homepage, navigate to homepage with state to trigger scroll
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToServices: true } });
    } else {
      // Already on homepage, just scroll
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  // Handle mouse enter for desktop hover
  const handleMouseEnter = (itemName) => {
    if (itemName === 'Services') {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div 
        className={`bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? 'max-h-0 overflow-hidden opacity-0 invisible' : 'max-h-20 opacity-100 visible'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-8">
              <a 
                href="mailto:kavachcloud@gmail.com" 
                className="flex items-center text-gray-700 hover:text-sky-500 transition-all duration-200 text-sm group"
              >
                <div className="bg-sky-50 p-2 rounded-full mr-2 group-hover:bg-sky-100 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <span className="font-medium">kavachcloud@gmail.com</span>
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex items-center text-gray-700 hover:text-sky-500 transition-all duration-200 text-sm group"
              >
                <div className="bg-sky-50 p-2 rounded-full mr-2 group-hover:bg-sky-100 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                </div>
                <span className="font-medium">+91 987 654 3210</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? 'shadow-lg bg-white/95' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block relative group">
                <div className={`relative transition-all duration-300 ${
                  isScrolled ? 'scale-95' : 'scale-100'
                }`}>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-sky-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Logo with circular design */}
                  <div className={`relative rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg group-hover:shadow-2xl transition-all duration-300 ring-2 ring-gray-100 group-hover:ring-sky-300 ${
                    isScrolled ? 'p-1' : 'p-1.5'
                  }`}>
                    <img 
                      src={logo} 
                      alt="Kavach Cloud Logo"
                      className={`transition-all duration-300 rounded-full ${
                        isScrolled ? "w-10 h-10" : "w-12 h-12"
                      } group-hover:scale-105 transform object-cover`} 
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.isScroll ? (
                    // Services link with smooth scroll and dropdown toggle
                    <button
                      onClick={handleServicesClick}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 font-medium text-[15px] ${
                        location.pathname === '/' && location.hash === '#services'
                          ? 'text-sky-600 bg-sky-50' 
                          : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                    </button>
                  ) : (
                    // Regular navigation links
                    <Link
                      to={item.path}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 font-medium text-[15px] ${
                        location.pathname === item.path 
                          ? 'text-sky-600 bg-sky-50' 
                          : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                    </Link>
                  )}
                  
                  {/* Services Dropdown Menu - Shows on hover */}
                  {item.hasDropdown && item.name === 'Services' && (
                    <div 
                      className={`absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 transition-all duration-200 max-h-[420px] overflow-y-auto ${
                        activeDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our Services</p>
                      </div>
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={`/services/${dropItem.slug}`}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 hover:text-sky-600 transition-all duration-150 border-l-2 border-transparent hover:border-sky-500"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Inquire Us Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className={`text-white px-7 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl relative overflow-hidden group ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-sm' 
                    : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-base'
                }`}
              >
                <span className="relative z-10">Inquire us</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-sky-500"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.isScroll ? (
                    // Services link for mobile with smooth scroll
                    <button
                      onClick={handleServicesClick}
                      className="block w-full text-left py-2 text-gray-700 hover:text-sky-500 transition-colors font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    // Regular navigation links for mobile
                    <Link
                      to={item.path}
                      className={`block text-gray-700 hover:text-sky-500 py-2 font-medium ${
                        location.pathname === item.path ? 'text-sky-500' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Mobile Services Dropdown */}
                  {item.hasDropdown && item.name === 'Services' && (
                    <div className="pl-4 space-y-2 mt-2 max-h-60 overflow-y-auto">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={`/services/${dropItem.slug}`}
                          className="block text-gray-600 hover:text-sky-500 py-1 text-sm"
                          onClick={closeMobileMenu}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="block bg-sky-500 text-white px-6 py-3 rounded-full text-center hover:bg-sky-600 transition-colors font-medium mt-4"
                onClick={closeMobileMenu}
              >
                Inquire us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
