import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../assets/images/kavachCloudLogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/', isScroll: true }, // Changed to scroll to services section
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Function to handle Services link click (smooth scroll)
  const handleServicesClick = (e) => {
    e.preventDefault();
    
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToServices();
      }, 100);
    } else {
      // Already on homepage, just scroll
      scrollToServices();
    }
    
    // Close mobile menu if open
    setIsOpen(false);
  };
  
  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };
  
  // Handle navigation link clicks
  const handleNavClick = (link) => {
    if (link.isScroll) {
      return handleServicesClick;
    }
    return () => setIsOpen(false);
  };
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kavach Cloud Logo"
              className="w-14 h-12 rounded-full"
            />
            <span className="text-2xl font-bold text-sky-500">
              Kavach Cloud
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              link.isScroll ? (
                // Services link with smooth scroll
                <button
                  key={link.name}
                  onClick={handleServicesClick}
                  className={`hover:text-sky-500 transition ${
                    location.pathname === '/' && location.hash === '#services'
                      ? 'text-sky-500 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </button>
              ) : (
                // Regular navigation links
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-sky-500 transition ${
                    location.pathname === link.path 
                      ? 'text-sky-500 font-semibold' 
                      : 'text-gray-700'
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Link 
              to="/contact"
              className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {navLinks.map(link => (
              link.isScroll ? (
                // Services link for mobile with smooth scroll
                <button
                  key={link.name}
                  onClick={handleServicesClick}
                  className="block w-full text-left py-2 hover:text-sky-500 transition"
                >
                  {link.name}
                </button>
              ) : (
                // Regular navigation links for mobile
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-2 hover:text-sky-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Link 
              to="/contact"
              className="block mt-4 bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}