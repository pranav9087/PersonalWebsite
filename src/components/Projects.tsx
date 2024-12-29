import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
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
    live: "https://example.com"
  },
  {
    title: "SegBin.AI – AI-Powered Waste Classification",
    description: "An automated waste sorting system that uses a Mask RCNN model deployed on Jetson Nano to classify trash into four categories (paper, wet waste, metals, plastics). Provides real-time feedback via ESP32-S3 and tracks bin composition through an interactive dashboard built with React.",
    image: SegBin,
    technologies: ["TensorFlow", "Mask RCNN", "React.js", "Jetson Nano", "ESP32-S3", "GCP"],
    github: "https://github.com/pranav9087/SegBin",
    live: "https://example.com"
  },
  {
    title: "Seeker – Student Club Discovery Platform",
    description: "A web app connecting students to campus clubs and organizations based on interests and activities. Built with Flask and React, Seeker enables personalized club recommendations and dynamic event discovery, fostering greater campus engagement.",
    image: Seeker,
    technologies: ["Flask", "React.js", "SQLite", "Python"],
    github: "https://github.com/pranav9087/Seeker",
    live: "https://example.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: 'slideUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}