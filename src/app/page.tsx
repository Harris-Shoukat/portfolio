"use client";

import React, { Suspense, lazy } from "react";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import BentoDashboard from "./components/bento/BentoDashboard";
import Contact from "./components/contact/Contact";

const Projects = lazy(() => import("./components/projects/Projects"));

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoDashboard />
      <About />
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Contact />
    </>
  );
}
