import React from 'react';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    items: ["Node.js", "Python", "Express", "Django"]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    items: ["React Native", "Flutter", "iOS", "Android"]
  },
  {
    category: "AI Frameworks",
    icon: <Settings className="w-6 h-6" />,
    items: ["Tensorflow", "Pytorch"]
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: ["JavaScript", "Python", "Java", "C++"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Skills & Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideUp 0.6s ease-out forwards',
                opacity: 0,
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg mr-3 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-100">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm hover:bg-cyan-500/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}