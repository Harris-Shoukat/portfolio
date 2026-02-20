"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../assets/logoremovebg.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={70} height={60} />
          </Link>
        </div>

        {/* Links */}
        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            experience
          </a>
          <a href="#project" onClick={() => setMenuOpen(false)}>
            project
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            about
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            contact
          </a>

          {/* Buttons inside mobile menu */}
          <div className={styles.mobileButtons}>
            <a href="#contact" style={{ width: "100%" }}>
              Hire Me
            </a>
            {/* <button style={{ width: "100%" }}>Resume</button> */}
          </div>
        </div>

        {/* Desktop buttons */}
        <div className={styles.ctaButtons}>
          <button>
            <a href="#contact">Hire Me</a>
          </button>
          {/* <button>
            <a
              href="https://drive.google.com/file/d/1vLK-Q6mspTzQ8TtAd8tjuu3GZOaZUAgA/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button> */}
        </div>

        {/* Mobile toggle icon */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
