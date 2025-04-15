import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Space",
    description: "A responsive space related website built with React and TailwindCSS, featuring smooth animations and a modern design.",
    tech: ["React", "TailwindCSS", "AOS"],
    demo: "https://space-one-red.vercel.app/",
    github: "https://github.com/anasuya100/space_.git"
  },
  {
    title: "Foodie Corner",
    description: "A food restaurant website showcasing a menu, reservation system, and customer reviews, built with React and TailwindCSS.",
    tech: ["React", "Tailwind css", "CSS Animations"],
    demo: "https://foodie-corner-zeta.vercel.app/",
    github: "https://github.com/anasuya100/Foodie-Corner.git"
  },
  {
    title: "Mental Health Chatbot",
    description: "An AI-powered chatbot designed to provide mental health support and resources, utilizing natural language processing for user interaction.",
    tech: ["React", "Python", "TailwindCSS"],
    demo: "https://mental-health-bot-eight.vercel.app/",
    github: "https://github.com/anasuya100/Mental_Health_bot.git"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-[#5C4033] mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[#5C4033] text-[#F4E4BC] px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href={project.demo}
                  className="flex items-center gap-1 text-[#5C4033] hover:text-[#8B6B4E] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
                <a 
                  href={project.github}
                  className="flex items-center gap-1 text-[#5C4033] hover:text-[#8B6B4E] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}