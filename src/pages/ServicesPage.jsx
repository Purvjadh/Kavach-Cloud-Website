// ServiceCards.jsx
// Copy this file to: src/components/sections/ServiceCards.jsx

import { services } from "../data/services";

export default function ServicePage() {
 

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make cloud storage simple, secure, and scalable for teams of any size.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flip-card h-80">
              <div className="flip-card-inner">
                
                {/* Front Side - Service Name */}
                <div className={`flip-card-front bg-gradient-to-br ${service.gradient} rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-xl`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center">
                    {service.title}
                  </h3>
                </div>

                {/* Back Side - Service Details */}
                <div className="flip-card-back bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Add these styles to your CSS file or in a <style> tag */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}