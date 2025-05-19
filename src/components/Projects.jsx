import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "VibeCanvas",
    description: "VibeCanvas is a mood tracking web app which Log your daily moods with emoji buttons and visualize emotional patterns on a color-coded calendar, styled with a vibrant palette.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Lucide React", "Date-fns"],
    demo: "https://vibe-canvas-ashen.vercel.app/",
    github: "https://github.com/anasuya100/VibeCanvas-"
  },
  {
    title: "QuoteBloom",
    description: "A simple web application that displays random inspirational quotes with a smooth fade-in animation when a new quote is generated.",
    tech: ["React", "TailwindCSS", "Framer Motion", "Lucide React"],
    demo: "https://quote-bloom.vercel.app/",
    github: "https://github.com/anasuya100/QuoteBloom"
  },
  {
    title: "Crypto Price tracker",
    description: "A responsive Web app tracks real-time cryptocurrency prices.This app simulates live updates using mock WebSocket behavior and handles all state management via Redux Toolkit.",
    tech: ["React", "TailwindCSS", "Redux Toolkit"],
    demo: "https://crypto-price-tracker-lac.vercel.app/",
    github: "https://github.com/anasuya100/Crypto-Price-Tracker"
  },
  {
    title: "Space",
    description: "A responsive space related website built with React and TailwindCSS, featuring smooth animations and a modern design.",
    tech: ["React", "TailwindCSS", "AOS", "javascript"],
    demo: "https://space-one-red.vercel.app/",
    github: "https://github.com/anasuya100/space_.git"
  },
  {
    title: "Pokemonn",
    description: "A responsive pokemon display website featuring smooth animations and a modern design.",
    tech: ["React", "Tailwind css","lucide-react", "PokeAPI"],
    demo: "https://pokemonn-xi.vercel.app/",
    github: "https://github.com/anasuya100/Pokemonn"
  },
  {
    title: "Mental Health Chatbot",
    description: "An AI-powered chatbot designed to provide mental health support and resources, utilizing natural language processing for user interaction.",
    tech: ["React", "Python","JavaScript" ,"TailwindCSS"],
    demo: "https://mental-health-bot-eight.vercel.app/",
    github: "https://github.com/anasuya100/Mental_Health_bot.git"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div data-aos="zoom-in" className="max-w-6xl mx-auto">
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