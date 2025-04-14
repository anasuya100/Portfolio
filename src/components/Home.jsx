import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import Image from '../assets/Mee.png';
import CV from '../assets/Anasuya_cv.pdf' // Import your CV file

export function Home() {
  return (
    <section id="home" className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-6">Front-End Developer</h2>
            <p className="text-lg text-gray-700 mb-8">
              Passionate about crafting beautiful, user-friendly web experiences. As a fresh graduate with a strong foundation in modern web technologies,
              I bring enthusiasm and a keen eye for detail to every project. My journey in web development started with a curiosity about how things work on the internet,
              and has evolved into a deep love for creating intuitive, responsive interfaces.
            </p>
            <div className="flex gap-6 mb-8">
              <a href="https://github.com/anasuya100" className="text-[#5C4033] hover:text-[#8B6B4E] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/anasuya-roy-161435277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxiMBHRwmSwO7kOqZrwJ1vA%3D%3D" className="text-[#5C4033] hover:text-[#8B6B4E] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:royanasuya346@gmail.com" className="text-[#5C4033] hover:text-[#8B6B4E] transition-colors">
                <Mail size={24} />
              </a>
            </div>
            {/* Download CV Button */}
            <a
              href={CV}
              download="Anasuya_Roy_CV.pdf" // Suggested filename for the downloaded file
              className="inline-block bg-[#5C4033] text-white px-6 py-3 rounded-lg hover:bg-[#8B6B4E] transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={Image}
              alt="Developer Sticker"
              className="w-full h-auto max-h-[600px] rounded-full border-4 shadow-xl transform hover:rotate-3 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}