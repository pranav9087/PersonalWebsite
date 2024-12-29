import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-slide-up">
            <h1 className="text-4xl md:text-4xl font-bold mb-4">
              Hi, I'm Pranav Penmatcha
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
            I craft AI-driven apps and scalable systems that (hopefully) don't crash under pressure.  
Passionate about building seamless user experiences on the front end and making sure the backend works just as hard behind the scenes.  
I love turning wild ideas into functional, elegant code – and debugging... well, that’s just part of the fun, right?

            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Professional headshot"
                className="relative rounded-lg shadow-2xl shadow-cyan-500/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}