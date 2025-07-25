import React from 'react';
import { ExternalLink, Github, Calendar, Users, Award, ArrowUpRight } from 'lucide-react';
import MusicEcg from '../assets/images/musicecg.jpg';
import SegBin from '../assets/images/segbin.jpg';
import Seeker from '../assets/images/seeker.jpg';

const projects = [
  {
    title: "Music ECG – Emotion-Based Music Recommender",
    description: "A mobile app that analyzes ECG data from Samsung smartwatches using machine learning (Random Forest) to detect emotions and recommend personalized music tracks. Built with React Native and Flask for real-time data processing and seamless user experience.",
    image: MusicEcg,
    technologies: ["React Native", "Flask", "Python", "Random Forest", "Samsung Health API"],
    github: "https://github.com/pranav9087/MusicECG",
    live: "https://example.com",
    category: "Mobile & AI",
    year: "2024",
    team: "Team Lead",
    featured: true
  },
  {
    title: "SegBin.AI – AI-Powered Waste Classification",
    description: "An automated waste sorting system that uses a Mask RCNN model deployed on Jetson Nano to classify trash into four categories (paper, wet waste, metals, plastics). Provides real-time feedback via ESP32-S3 and tracks bin composition through an interactive dashboard built with React.",
    image: SegBin,
    technologies: ["TensorFlow", "Mask RCNN", "React.js", "Jetson Nano", "ESP32-S3", "GCP"],
    github: "https://github.com/pranav9087/SegBin",
    live: "https://example.com",
    category: "AI & IoT",
    year: "2023",
    team: "Team Lead",
    featured: true
  },
  {
    title: "Seeker – Student Club Discovery Platform",
    description: "A web app connecting students to campus clubs and organizations based on interests and activities. Built with Flask and React, Seeker enables personalized club recommendations and dynamic event discovery, fostering greater campus engagement.",
    image: Seeker,
    technologies: ["Flask", "React.js", "SQLite", "Python"],
    github: "https://github.com/pranav9087/Seeker",
    live: "https://example.com",
    category: "Web Platform",
    year: "2023",
    team: "Frontend Lead",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 glass-card mb-6">
            <Award className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-sm text-gray-300">My Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Things I've Built</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some projects I've worked on during my journey as a student. 
            Some work great, some taught me valuable lessons about debugging!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-card overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
              }}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-video lg:aspect-auto lg:h-96 relative">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-sm font-bold rounded-full">
                      Featured
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-card transition-colors duration-300"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                      {/* Uncomment when live demos are available */}
                      {/* <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-card transition-colors duration-300"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Project Meta */}
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="w-4 h-4 mr-1" />
                    {project.team}
                  </div>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-card text-sm font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-xl transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                  {/* Uncomment when live demos are available */}
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '600ms' }}>
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on cool projects and learn new things along the way!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Let's Build Something Cool
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}