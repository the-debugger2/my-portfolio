import './App.css';
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import { Element } from 'react-scroll'; // Import Element from react-scroll

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <Experience />
      </Element>

      <Element name="education">
        <Education />
      </Element>
<Element name="skills">
        <Skills />
      </Element>
      
      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;