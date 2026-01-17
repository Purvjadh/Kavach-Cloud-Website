import {useState,useEffect} from 'react';

export default function StatCard({ icon: Icon, value, suffix, label, description, color, isVisible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div 
      className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className={`w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Counter */}
      <div className="text-5xl font-bold mb-2">
        {isVisible ? (
          <>
            {count === value && value % 1 !== 0 ? value : Math.floor(count)}
            {suffix}
          </>
        ) : (
          '0' + suffix
        )}
      </div>

      {/* Label */}
      <div className="text-xl font-semibold mb-2">
        {label}
      </div>

      {/* Description */}
      <p className="text-gray-200 text-sm">
        {description}
      </p>

      {/* Decorative element */}
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
    </div>
  );
}