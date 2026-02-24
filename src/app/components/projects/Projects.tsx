"use client";

import React, { useRef, useEffect, useCallback } from "react";
import styles from "./Projects.module.css";
import Image from "next/image";
import coffee from "../../assets/coffee.png";
import password from "../../assets/password.jpg";
import users from "../../assets/users.png";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  name: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    name: "HMC Society",
    image:
      "https://img.freepik.com/free-photo/homepage-seen-computer-screen_23-2149416723.jpg?semt=ais_hybrid&w=740&q=80",
    githubUrl: "https://github.com/yourusername/project-one",
    description:
      "A scalable web-based travelling Society Management System developed as my FYP. The platform features secure authentication, role-based access control, member data management, event coordination, and real-time announcements to digitize and optimize society operations.",
    tags: ["React", "Node.js", "Auth", "Real-time"],
  },
  {
    id: 2,
    name: "Coffee App",
    image: coffee.src,
    githubUrl: "https://github.com/yourusername/project-two",
    description:
      "A React Native coffee ordering app featuring categorized coffee listings, branch-based location filters, favorites functionality, and a cart system for seamless ordering experience.",
    tags: ["React Native", "Expo", "Cart"],
  },
  {
    id: 3,
    name: "Password Agent",
    image: password.src,
    githubUrl: "https://github.com/yourusername/project-three",
    description:
      "A secure web-based password manager built to demonstrate authentication and protected routing. The system includes login functionality, a user-specific dashboard, and CRUD operations for managing stored credentials, focusing on privacy and structured data handling.",
    tags: ["Web", "Auth", "CRUD", "Security"],
  },
  {
    id: 4,
    name: "POKO",
    image: users.src,
    githubUrl: "https://github.com/yourusername/project-four",
    description:
      "A React Native (Expo) app that consumes a public API to display users, visualize counts with graphs, and present detailed data in a structured table using RTK and react-native-table-component.",
    tags: ["Expo", "RTK", "API", "Charts"],
  },
];

const Projects = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((index: number, el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    const refs = itemRefs.current;
    refs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.projectsSection} id="project">
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>Work</span>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of things I&apos;ve built.
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => setRef(index, el)}
            className={styles.cardWrap}
            style={{ ["--order" as string]: index }}
          >
            <article className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className={styles.image}
                  priority={index === 0}
                  loading={index === 0 ? undefined : "lazy"}
                  decoding="async"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.title}>{project.name}</h3>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <Github className={styles.linkIcon} />
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkPrimary}
                      aria-label={`View live ${project.name}`}
                    >
                      <ExternalLink className={styles.linkIcon} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
