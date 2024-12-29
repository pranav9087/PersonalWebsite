import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Pranav Penmatcha
          </a>
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="flex space-x-4">
            {[
              { icon: <Github className="w-5 h-5" />, href: 'https://github.com/pranav9087' },
              { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/pranavpenmatcha/' },
              { icon: <Mail className="w-5 h-5" />, href: 'mailto:pranav.varma1801@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}