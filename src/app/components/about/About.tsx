import React from "react";
import aboutimg from "../../assets/about.jpg";
import styles from "./About.module.css";
import Image from "next/image";

function About() {
  const aboutText = {
    title: "About Me",
    greeting: "Hi! I’m a passionate ",
    role: "Frontend Developer ",
    picinfo: "freepik.com",
    description:
      "who loves crafting clean, modern, and responsive user interfaces. I specialize in turning design concepts into beautiful, interactive experiences using technologies like React, React Native, Tailwind CSS, and JavaScript. I’m constantly learning and pushing the limits of what’s possible on the web/app",
  };
  return (
    <section id="about" className="md:w-4/5 md:mx-auto mb-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20">
      {/* left side: Image */}
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <Image
          src={aboutimg.src}
          width={300}
          height={300}
          alt="Frontend Developer"
          className="w-80 md:w-96 object-contain rounded-4xl shadow-2xl hover:scale-102 transition duration-300 ease-in-out"
        />
      </div>

      {/* right side: Text */}
      <div className="md:w-1/2 space-y-6 flex flex-col justify-center">
        <h2 className={`${styles.outlinetext} text-8xl font-extrabold mb-5`}>{aboutText.title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {aboutText.greeting}
          <span className="font-bold text-gray-600">{aboutText.role}</span>
          {aboutText.description}
          <span className=" text-neutral-50/50 ml-5">{aboutText.picinfo}</span>
        </p>
      </div>
    </section>
  );
}

export default About;
