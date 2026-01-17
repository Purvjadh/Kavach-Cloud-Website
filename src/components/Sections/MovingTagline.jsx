import { Shield, Lock, Cloud, Zap, Globe, CheckCircle } from 'lucide-react';
import { features } from '../../data/features.js';

export default function MovingTagline() {
 

  return (
    <section className="bg-gray-900 text-white py-6 overflow-hidden">
      <div className="relative">
        {/* First scrolling row - left to right */}
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...features, ...features, ...features].map((feature, index) => (
            <div 
              key={`left-${index}`}
              className="inline-flex items-center gap-3 mx-8"
            >
              <feature.icon className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-semibold">{feature.text}</span>
              <span className="text-purple-400 text-2xl">•</span>
            </div>
          ))}
        </div>

        {/* Second scrolling row - right to left */}
        <div className="flex animate-scroll-right whitespace-nowrap mt-4">
          {[...features, ...features, ...features].map((feature, index) => (
            <div 
              key={`right-${index}`}
              className="inline-flex items-center gap-3 mx-8"
            >
              <feature.icon className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-semibold">{feature.text}</span>
              <span className="text-blue-400 text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}