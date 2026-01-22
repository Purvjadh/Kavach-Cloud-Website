import { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-semibold mb-4">
            CONTACT US
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 text-lg mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-sky-400  to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Email Us</h4>
                  <p className="text-gray-600">flickerhackingfirm@gmail.com</p>
                  <p className="text-gray-600"> contact@kavachcloud.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-sky-400  to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Call Us</h4>
                  <p className="text-gray-600">+918968847476</p>
                  <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm IST</p>
                </div>
              </div>

              {/* Office */}
              <div className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-sky-400  to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Visit Us</h4>
                  <p className="text-gray-600">Delhi, India</p>
                 
                </div>
              </div>

            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
              <h4 className="font-bold text-lg mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            
            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <p className="text-green-700 font-semibold">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="name@gmail.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="Your Company"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-400  to-cyan-400 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}