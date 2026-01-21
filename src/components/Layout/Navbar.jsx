import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/images/kavachImage.jpeg";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Company Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kavach Cloud Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-2xl font-bold text-blue-600">
              Kavach Cloud
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition hover:text-blue-600 ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
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
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 transition ${
                  location.pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-center hover:bg-blue-700 transition"
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
