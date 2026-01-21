
import KavachCloudLogo from '../../assets/images/kavachCloudLogo.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Company Aim - 5-6 words */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Secure Cloud Storage
              <span className="block text-blue-600">Made Simple</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Store, protect, and access your data with enterprise-grade security and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition text-center"
              >
                Get Started
              </Link>

              <Link 
                to="/services"
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right - Company Logo */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img 
                src={KavachCloudLogo}
                alt="Kavach Cloud Logo"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback if logo doesn't exist
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl">
                      <div class="text-center text-white p-8">
                        <div class="text-6xl font-bold mb-4">KC</div>
                        <div class="text-2xl font-semibold">Kavach Cloud</div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}