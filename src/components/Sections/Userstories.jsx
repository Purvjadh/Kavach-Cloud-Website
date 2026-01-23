import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import userAvatarOne from '../../assets/images/user-avatar-one.jpg';
import userAvatarTwo from '../../assets/images/user-avatar-two.png';
import userAvatarThree from '../../assets/images/user-avatar-three.png';

export default function UserStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Inc.",
      image: userAvatarOne,
      rating: 5,
      text: "Kavach Cloud has transformed how we manage our data. The security features are top-notch, and the team collaboration tools have boosted our productivity by 40%. Highly recommended for any business serious about data protection.",
      highlight: "40% productivity boost"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StartupHub",
      image: userAvatarTwo,
      rating: 5,
      text: "As a startup, we needed a reliable and scalable cloud solution that wouldn't break the bank. Kavach Cloud delivered exactly that. The customer support is exceptional, and the platform is incredibly intuitive to use.",
      highlight: "Exceptional support"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Global Logistics",
      image: userAvatarThree,
      rating: 5,
      text: "We switched to Kavach Cloud six months ago, and it's been a game-changer. The automatic backup feature saved us during a recent hardware failure. We didn't lose a single file. The peace of mind is priceless.",
      highlight: "Zero data loss"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Slide from LEFT */}
        <div className="text-center mb-16">
          <div 
            className={`inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-6'
            }`}
          >
            TESTIMONIALS
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 delay-100 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            What Our Customers Say
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            Don't just take our word for it. Here's what businesses are saying about Kavach Cloud.
          </p>
        </div>

        {/* Testimonial Carousel - Slide from RIGHT */}
        <div className="max-w-5xl mx-auto">
          <div 
            className={`relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 transition-all duration-1200 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-sky-600 to-cyan-500 rounded-2xl flex items-center justify-center opacity-10">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              
              {/* Rating */}
              <div className="flex gap-1 mb-6 justify-center md:justify-start">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Highlight Badge */}
              <div className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                ✨ {testimonials[currentIndex].highlight}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                  {imgError && <p>Could not load image.</p>}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-gray-500">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 justify-center md:justify-end">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-sky-400 hover:to-cyan-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-sky-400 hover:to-cyan-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div 
            className={`flex gap-2 justify-center mt-8 transition-all duration-1000 delay-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-sky-400 to-cyan-400 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats - Fade + slight scale */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div 
            className={`text-center transition-all duration-1000 delay-600 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div 
            className={`text-center transition-all duration-1000 delay-700 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              2,500+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div 
            className={`text-center transition-all duration-1000 delay-800 ease-out ${
              isVisible 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-gray-600">Would Recommend</div>
          </div>
        </div>

      </div>
    </section>
  );
}