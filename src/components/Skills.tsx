import React, { useState } from 'react';
import { Code2, Database, Layout, Server, Settings, Smartphone, Star, TrendingUp } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-8 h-8" />,
    items: [
      { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "TypeScript", level: 75, color: "from-blue-500 to-indigo-600" },
      { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-teal-600" },
      { name: "Next.js", level: 70, color: "from-gray-400 to-gray-700" }
    ],
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    category: "Backend Development",
    icon: <Server className="w-8 h-8" />,
    items: [
      { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
      { name: "Python", level: 85, color: "from-yellow-400 to-orange-500" },
      { name: "Express", level: 75, color: "from-gray-500 to-gray-700" },
      { name: "Django", level: 70, color: "from-green-600 to-green-800" }
    ],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-8 h-8" />,
    items: [
      { name: "PostgreSQL", level: 75, color: "from-blue-600 to-indigo-700" },
      { name: "MongoDB", level: 80, color: "from-green-500 to-green-700" },
      { name: "Redis", level: 65, color: "from-red-400 to-red-600" },
      { name: "MySQL", level: 70, color: "from-orange-400 to-orange-600" }
    ],
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    category: "Mobile Development",
    icon: <Smartphone className="w-8 h-8" />,
    items: [
      { name: "React Native", level: 75, color: "from-cyan-400 to-blue-500" },
      { name: "Flutter", level: 60, color: "from-blue-400 to-indigo-500" },
      { name: "iOS", level: 55, color: "from-gray-400 to-gray-600" },
      { name: "Android", level: 60, color: "from-green-400 to-green-600" }
    ],
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    category: "AI & Machine Learning",
    icon: <Settings className="w-8 h-8" />,
    items: [
      { name: "TensorFlow", level: 70, color: "from-orange-400 to-red-500" },
      { name: "PyTorch", level: 65, color: "from-red-400 to-pink-500" },
      { name: "Scikit-learn", level: 75, color: "from-yellow-400 to-orange-500" },
      { name: "OpenCV", level: 60, color: "from-blue-400 to-cyan-500" }
    ],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    category: "Programming Languages",
    icon: <Code2 className="w-8 h-8" />,
    items: [
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
      { name: "Python", level: 80, color: "from-blue-400 to-green-500" },
      { name: "Java", level: 75, color: "from-red-500 to-orange-600" },
      { name: "C++", level: 70, color: "from-blue-600 to-purple-600" }
    ],
    gradient: "from-yellow-500/20 to-orange-500/20"
  }
];

export function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 glass-card mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-300">What I'm Learning</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's what I've been picking up during my journey as a computer science student. 
            Still learning, still growing, and definitely still googling how to center a div! 😅
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group glass-card p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                opacity: 0,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.gradient} group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
                    {skill.category}
                  </h3>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                    <span className="text-sm text-gray-400">Learning Mode</span>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skill.items.map((item, itemIndex) => (
                  <div key={item.name} className="group/item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {item.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: hoveredCard === index ? `${item.level}%` : '0%',
                          transitionDelay: `${itemIndex * 100}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
          {[
            { label: "Years Learning", value: "3+", color: "text-cyan-400" },
            { label: "Projects Built", value: "15+", color: "text-emerald-400" },
            { label: "Technologies Tried", value: "20+", color: "text-purple-400" },
            { label: "Stack Overflow Visits", value: "∞", color: "text-orange-400" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-card p-6 hover:bg-white/10 transition-all duration-300">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}