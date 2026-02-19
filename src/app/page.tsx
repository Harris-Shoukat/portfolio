"use client";
import React from 'react';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import TechnicalProficiency from './components/technicalproficiency/TechnicalProficiency';
import Projects from './components/projects/Projects'; // Import the new Projects component


const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <TechnicalProficiency />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
