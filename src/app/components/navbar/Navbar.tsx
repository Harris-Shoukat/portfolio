'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../../assets/logos.png';
import { Menu, X } from 'lucide-react'; // icons for mobile toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>

        {/* Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>experience</a>
          <a href="#project" onClick={() => setMenuOpen(false)}>project</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>about</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>contact</a>

          {/* Buttons inside mobile menu */}
          <div className={styles.mobileButtons}>
            <button style={{width: '100%'}}>Hire Me</button>
            <button style={{width: '100%'}}>Resume</button>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className={styles.ctaButtons}>
          <button>Hire Me</button>
          <button>Resume</button>
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
