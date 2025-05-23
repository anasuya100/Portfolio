import React, { useState } from 'react';
import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Aos from "aos";
import "aos/dist/aos.css"; 

function App() {
   React.useEffect(() => { 
    Aos.init({
      duration: 1000,
     });
  }); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4E4BC]">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;