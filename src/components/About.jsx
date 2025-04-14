import React from 'react';
import { GraduationCap, Briefcase, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#5C4033] mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F4E4BC] rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-[#5C4033]" />
              <h3 className="text-xl font-semibold text-[#5C4033]">Education</h3>
            </div>
            <p className="text-gray-700">Computer Science & Engineering</p>
            <p className="text-gray-600">Swami Vivekananda University</p>
            <p className="text-gray-600">2023 - 2027</p>
          </div>
          
          <div className="bg-[#F4E4BC] rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              < Briefcase className="w-8 h-8 text-[#5C4033]" />
              <h3 className="text-xl font-semibold text-[#5C4033]">Interests</h3>
            </div>
            <ul className="text-gray-700 space-y-2">
              <li>UI/UX Design</li>
              <li>Open Source</li>
              <li>JAVA</li>
            </ul>
            </div>
            <div className="bg-[#F4E4BC] rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Coffee className="w-8 h-8 text-[#5C4033]" />
              <h3 className="text-xl font-semibold text-[#5C4033]">Hobby</h3>
            </div>
            <p className="text-gray-700">Drawing</p>
            <p className="text-gray-600">Writting</p>
            <p className="text-gray-600">Designing</p>
          </div>
        </div>
        
        <div className="mt-12 bg-[#F4E4BC] rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl text-center font-semibold text-[#5C4033] mb-4">My Journey</h3>
          <p className="text-gray-700 mb-4">
            I'm a 2nd-year CSE student with a passion for building real-world solutions. I started freelancing early, which helped me sharpen my web development skills and gain hands-on experience beyond the classroom.
            In college, I was part of the second-best team in an inter-college hackathon, where we tackled challenges with creativity and teamwork. I also presented an AI-powered chatbot at our tech fest, focused on providing mental health support.
            These experiences pushed me to explore technologies like React, Node.js, and AI tools more deeply. I enjoy turning ideas into functional projects, especially those that help people. I'm also actively learning about UI/UX and improving my problem-solving through DSA.
            Tech for me is more than code—it's a way to make an impact, and this is just the beginning of my journey.
          </p>
        </div>
      </div>
    </section>
  );
}