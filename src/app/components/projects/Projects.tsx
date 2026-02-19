"use client";

import React, { useRef, useEffect } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import coffee from '../../assets/coffee.png';
import password from '../../assets/password.jpg';
import users from '../../assets/users.png';

interface Project {
  id: number;
  name: string;
  image: string;
  githubUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'HMC society',
    image: 'https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?semt=ais_hybrid&w=740&q=80',
    githubUrl: 'https://github.com/yourusername/project-one',
    description:
      'A scalable web-based travelling Society Management System developed as my FYP. The platform features secure authentication, role-based access control, member data management, event coordination, and real-time announcements to digitize and optimize society operations.',
  },
  {
    id: 2,
    name: 'coffee app',
    image: coffee.src,
    githubUrl: 'https://github.com/yourusername/project-two',
    description:
      'A React Native coffee ordering app featuring categorized coffee listings, branch-based location filters, favorites functionality, and a cart system for seamless ordering experience.',
  },
  {
    id: 3,
    name: 'password agent',
    image: password.src,
    githubUrl: 'https://github.com/yourusername/project-three',
    description:
      'A secure web-based password manager built to demonstrate authentication and protected routing. The system includes login functionality, a user-specific dashboard, and CRUD operations for managing stored credentials, focusing on privacy and structured data handling.',
  },
  {
    id: 4,
    name: 'POKO',
    image: users.src,
    githubUrl: 'https://github.com/yourusername/project-four',
    description:
      'A React Native (Expo) app that consumes a public API to display users, visualize counts with graphs, and present detailed data in a structured table using RTK and react-native-table-component.',
  },
];

const Projects = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            // Optional: uncomment next line if you want animation only once
            // observer.unobserve(entry.target);
          }
          // Optional: remove class when out of view → allows re-animation on scroll up
          // else {
          //   entry.target.classList.remove(styles.visible);
          // }
        });
      },
      {
        threshold: 0.15,          // start animation when ~15% of item is visible
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.projectsSection} id="project">
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.timeline}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.timelineNode}></div>

            <div className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover' }}
                  className={styles.projectImage}
                />
              </div>

              <h3 className={styles.projectTitle}>{project.name}</h3>
              <p className={styles.projectDescription}>{project.description}</p>

              {/* <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubButton}
              >
                View on GitHub
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;