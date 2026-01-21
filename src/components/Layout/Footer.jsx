import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kavach Cloud</h3>
            <p className="text-gray-400">
              Secure cloud storage solutions for businesses of all sizes.
            </p>
          </div>
           
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services#storage" className="text-gray-400 hover:text-white">Cloud Storage</Link></li>
              <li><Link to="/services#backup" className="text-gray-400 hover:text-white">Backup</Link></li>
              <li><Link to="/services#security" className="text-gray-400 hover:text-white">Security</Link></li>
              <li><Link to="/services#support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2"> contact@kavachcloud.com</p>
            <p className="text-gray-400 mb-4">+918968847476</p>
            <div className="flex gap-4">
              <Facebook className="cursor-pointer hover:text-purple-400" />
              <Twitter className="cursor-pointer hover:text-purple-400" />
              <Linkedin className="cursor-pointer hover:text-purple-400" />
              <Instagram className="cursor-pointer hover:text-purple-400" />
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Kavach Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}