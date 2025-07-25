import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Pranav from '../assets/images/pranav.jpeg';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Reduced particles from 50 to 25 for better performance
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Reduced speed
        vy: (Math.random() - 0.5) * 0.3, // Reduced speed
        size: Math.random() * 1.5 + 0.5, // Smaller particles
        opacity: Math.random() * 0.3 + 0.1, // Reduced opacity
      });
    }

    let animationId: number;

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-animation opacity-5"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Reduced floating shapes for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-12 h-12 border border-cyan-400/15 rounded-lg rotate-45 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-32 left-20 floating-element">
          <div className="w-16 h-16 border border-emerald-400/15 rounded-full backdrop-blur-sm"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Hi, I'm</span>
                <span className="block text-gradient">Pranav Penmatcha</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-medium text-gradient-secondary">
              Enthusiastic about AI & Full Stack Development
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl">
              I'm a computer science student at the University of Illinois who loves turning caffeine into code and bugs into features (eventually). 
              Currently learning the art of making computers do what I want, with varying degrees of success! 
              Always excited to build cool stuff and debug the not-so-cool stuff.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group glow-button inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Check Out My Work
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center px-8 py-4 glass-card text-cyan-400 font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Let's Chat!
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: <Github className="w-6 h-6" />, href: 'https://github.com/pranav9087', label: 'GitHub' },
                { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/pranavpenmatcha/', label: 'LinkedIn' },
                { icon: <Mail className="w-6 h-6" />, href: 'mailto:pranav.varma1801@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 glass-card hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Optimized animated rings - slower animation */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '30s' }}></div>
              <div className="absolute inset-4 rounded-full border border-blue-400/15 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full backdrop-blur-sm"></div>
                <img 
                  src={Pranav}
                  alt="Pranav Penmatcha - CS Undergrad at UIUC"
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 glass-card p-3 floating-element">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  AI
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 floating-element" style={{ animationDelay: '-1s' }}>
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  ☕
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}