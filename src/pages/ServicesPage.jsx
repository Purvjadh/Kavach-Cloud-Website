
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../data/services';
import { ArrowLeft, Check } from 'lucide-react';

export default function ServicePage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className={`bg-gradient-to-br ${service.gradient} text-white py-20`}>
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <service.icon className="w-12 h-12 text-white" />
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-3">
                FEATURE
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">{service.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">
            {service.detailedDescription}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Key Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Benefits</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-6">Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.useCases.map((useCase, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${service.gradient} text-white p-6 rounded-xl`}>
                <div className="text-5xl font-bold mb-2 opacity-20">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <p className="font-semibold">{useCase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 bg-gradient-to-br ${service.gradient} text-white rounded-2xl p-12 text-center`}>
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90">
            Experience the power of {service.title} today
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}