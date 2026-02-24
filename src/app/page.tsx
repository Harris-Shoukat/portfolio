"use client";

import React, { Suspense, lazy } from "react";

import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import TechnicalProficiency from "./components/technicalproficiency/TechnicalProficiency";
import Contact from "./components/contact/Contact";

const Projects = lazy(() => import("./components/projects/Projects"));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <TechnicalProficiency />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Contact />
    </>
  );
}
