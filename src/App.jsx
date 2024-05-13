// App.js
// import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <About />
      <Skills />
      <Project />
      <Certificates />
      <Experience />
      <Education />
      <Contacts />
      <Footer/>
    </>
  );
}

export default App;
