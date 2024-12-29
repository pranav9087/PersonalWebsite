import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Pranav Penmatcha
            </h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
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
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pranav Penmatcha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}