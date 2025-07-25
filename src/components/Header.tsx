import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/pranav9087',
      label: 'GitHub',
      hoverColor: 'hover:text-gray-300'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://www.linkedin.com/in/pranavpenmatcha/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      href: 'mailto:pranav.varma1801@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-cyan-400'
    }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-card bg-gray-900/80 backdrop-blur-md shadow-xl shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a 
            href="#home" 
            className="group relative text-xl font-bold"
          >
            <span className="text-gradient group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
              Pranav Penmatcha
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/20"></div>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links - Added proper spacing */}
          <div className="hidden md:flex items-center space-x-2 mr-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass-card text-gray-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110 hover:bg-white/10`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 glass-card text-gray-400 hover:text-cyan-400 transition-colors mr-4"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="glass-card mt-4 p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700/50">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-card text-gray-400 ${social.hoverColor} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
          style={{
            width: `${Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100)}%`
          }}
        ></div>
      </div>
    </header>
  );
}