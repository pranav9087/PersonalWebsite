import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: 'https://github.com/pranav9087',
      label: 'GitHub',
      hoverColor: 'hover:text-gray-300 hover:bg-gray-700/20'
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: 'https://www.linkedin.com/in/pranavpenmatcha/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: 'mailto:pranav.varma1801@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-cyan-400 hover:bg-cyan-400/10'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-8 bg-gradient-to-t from-black to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-3">
                Pranav Penmatcha
              </h3>
              <p className="text-lg text-gray-300 mb-4">
                CS Student & Aspiring Developer
              </p>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Making sense of algorithms and building cool stuff without breaking everything (results may vary). 
                Currently powered by coffee and Stack Overflow! ☕
              </p>
            </div>

            {/* Fun Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="flex items-center text-cyan-400 mb-1">
                  <Code className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <span className="text-xs text-gray-400">Lines Debugged</span>
              </div>
              <div className="text-center">
                <div className="flex items-center text-emerald-400 mb-1">
                  <Coffee className="w-4 h-4 mr-1" />
                  <span className="text-2xl font-bold">∞</span>
                </div>
                <span className="text-xs text-gray-400">Study Sessions</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
            <h4 className="text-lg font-semibold text-white mb-4">Let's Connect</h4>
            <p className="text-gray-400 mb-6 text-sm">
              Follow my journey of learning, building, and occasionally breaking things! 
              Always happy to chat about tech, projects, or the best study spots on campus. 😊
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card text-gray-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Pranav Penmatcha.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>lots of</span>
            <Coffee className="w-4 h-4 text-amber-400" />
            <span>and some late nights</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">
              Built with React & Tailwind (and a lot of googling!)
            </span>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group p-3 glass-card text-gray-400 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}