"use client";
import React from 'react';
import Hero from './components/hero/Hero';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import About from './components/about/About';


const HomePage = () => {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
