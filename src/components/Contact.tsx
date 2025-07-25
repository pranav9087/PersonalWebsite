import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "pranav.varma1801@gmail.com",
      href: "mailto:pranav.varma1801@gmail.com",
      color: "text-cyan-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "(847) 890-8022",
      href: "tel:+18478908022",
      color: "text-emerald-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Champaign, Illinois",
      href: "#",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 glass-card mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-300">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? I'd love to hear about your ideas and discuss how we can bring them to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, or just chat about technology. 
                Drop me a message and I'll get back to you as soon as possible.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center p-4 glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'slideUp 0.6s ease-out forwards',
                      opacity: 0,
                    }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="text-sm text-gray-400 mb-1">
                        {info.label}
                      </div>
                      <div className="text-white font-medium group-hover:text-gradient transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-8 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl border border-emerald-500/20">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-medium">Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h3>

              {/* Name Field */}
              <div className="relative">
                <label 
                  htmlFor="name" 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'name' || formData.name 
                      ? '-top-2 text-xs text-cyan-400 bg-gray-900 px-2' 
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label 
                  htmlFor="email" 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'email' || formData.email 
                      ? '-top-2 text-xs text-cyan-400 bg-gray-900 px-2' 
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label 
                  htmlFor="subject" 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'subject' || formData.subject 
                      ? '-top-2 text-xs text-cyan-400 bg-gray-900 px-2' 
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label 
                  htmlFor="message" 
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focusedField === 'message' || formData.message 
                      ? '-top-2 text-xs text-cyan-400 bg-gray-900 px-2' 
                      : 'top-4 text-gray-400'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-transparent resize-none transition-all duration-200"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group glow-button px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </div>
              </button>

              {/* Success Message Placeholder */}
              <div className="hidden p-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl border border-emerald-500/20">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prefer a different approach?
            </h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out through any of these platforms where I'm most active.
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { 
                  name: 'LinkedIn', 
                  href: 'https://www.linkedin.com/in/pranavpenmatcha/', 
                  color: 'hover:text-blue-400 hover:bg-blue-400/10' 
                },
                { 
                  name: 'GitHub', 
                  href: 'https://github.com/pranav9087', 
                  color: 'hover:text-gray-300 hover:bg-gray-700/20' 
                },
                { 
                  name: 'Email', 
                  href: 'mailto:pranav.varma1801@gmail.com', 
                  color: 'hover:text-cyan-400 hover:bg-cyan-400/10' 
                }
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 glass-card text-gray-400 font-medium transition-all duration-300 transform hover:scale-105 ${platform.color}`}
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}