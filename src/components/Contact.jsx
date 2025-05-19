import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#F4E4BC]">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="zoom-in" className="text-3xl font-bold text-[#5C4033] mb-12 text-center">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right" className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#5C4033]">
            <h3 className="text-2xl font-semibold text-[#5C4033] mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-[#5C4033] p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#F4E4BC]" />
                </div>
                <div>
                  <p className="font-medium text-[#5C4033]">Email</p>
                  <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-[#5C4033]">
                    royanasuya346@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#5C4033] p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#F4E4BC]" />
                </div>
                <div>
                  <p className="font-medium text-[#5C4033]">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-[#5C4033]">
                    +91 8617542337
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#5C4033] p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#F4E4BC]" />
                </div>
                <div>
                  <p className="font-medium text-[#5C4033]">Location</p>
                  <p className="text-gray-600">Kolkata,West Bengal</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#5C4033]/20">
              <p className="font-medium text-[#5C4033] mb-4">Connect on Social Media</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/anasuya-roy-161435277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxiMBHRwmSwO7kOqZrwJ1vA%3D%3D"
                  className="bg-[#5C4033] p-3 rounded-full hover:bg-[#8B6B4E] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 text-[#F4E4BC]" />
                </a>
                <a
                  href="https://github.com/anasuya100"
                  className="bg-[#5C4033] p-3 rounded-full hover:bg-[#8B6B4E] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 text-[#F4E4BC]" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#5C4033]">
            <h3 className="text-2xl font-semibold text-[#5C4033] mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-[#5C4033]/20 focus:border-[#5C4033] focus:outline-none transition-colors"
                  placeholder="Abcd xyz"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-[#5C4033]/20 focus:border-[#5C4033] focus:outline-none transition-colors"
                  placeholder="abcd@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-[#5C4033]/20 focus:border-[#5C4033] focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5C4033] text-[#F4E4BC] py-3 px-6 rounded-lg hover:bg-[#8B6B4E] transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}