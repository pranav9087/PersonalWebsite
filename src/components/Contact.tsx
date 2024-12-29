import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-gray-100">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                <a href="mailto:pranav.varma1801@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  pranav.varma1801@gmail.com
                </a>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                <a href="tel:+18478908022" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  (847) 890-8022
                </a>
              </div>
              <div className="flex items-center group">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">Champaign, Illinois</span>
              </div>
            </div>
          </div>
          <form className="space-y-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}