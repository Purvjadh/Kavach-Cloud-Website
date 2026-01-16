
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div>
      
      
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl">We'd love to hear from you</p>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">contact@kavachcloud.com</p>
                    <p className="text-gray-600">flickerhackingfirm@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+918968847476</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Office</h3>
                   
                    <p className="text-gray-600">Delhi,India</p>
                  </div>
                </div>
              </div>
              
              {/* Map (optional) */}
              {/* <div className="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map placeholder</p>
              </div> */}
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
              {/* <ContactForm />  add here*/}
            </div>
            
          </div>
        </div>
      </section>
      
     
    </div>
  );
}