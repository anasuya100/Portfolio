import React from 'react';
import { Code2 } from 'lucide-react';

// Skills array with logo URLs (replace placeholders with actual image paths)
const skills = [
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/javascript/javascript-original.svg" },
  { name: "React.js", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg" },
  // { name: "Responsive Design", logo: "https://via.placeholder.com/40?text=RD" }, // Replace with actual icon
  { name: "Git", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/git/git-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vscode/vscode-original.svg" },
  // { name: "RESTful APIs", logo: "https://via.placeholder.com/40?text=API" }, // Replace with actual icon
  { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "npm", logo: "https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/npm/npm-original-wordmark.svg" },
  // { name: "Web Accessibility", logo: "https://via.placeholder.com/40?text=A11Y" }, // Replace with actual icon
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="zoom-in" className="text-4xl font-extrabold text-[#5C4033] mb-12 text-center drop-shadow-md">
          Technical Skills
        </h2>
        {/* Scrolling container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center justify-center bg-[#F4E4BC] rounded-xl p-6 mx-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ width: '180px', height: '180px' }} // Square dimensions
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-12 h-12 mb-3 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/40?text=Skill"; // Fallback image
                    }}
                  />
                  <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}