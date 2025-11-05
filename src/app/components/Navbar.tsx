'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import logo from '../assets/logos.png';
import { Menu, X } from 'lucide-react'; // icons for mobile toggle

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAwayFromTop = window.scrollY > 10;
      setShowNavbar(isAwayFromTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden}`}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>

        {/* Desktop Links */}
        <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
          <Link href="#experience" onClick={() => setMenuOpen(false)}>experience</Link>
          <Link href="#project" onClick={() => setMenuOpen(false)}>project</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>about</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>contact</Link>

          {/* CTA Buttons visible inside mobile menu */}
          <div className={styles.mobileButtons}>
            <button style={{width: '100%'}}>Hire Me</button>
            <button style={{width: '100%'}}>Resume</button>
          </div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className={styles.ctaButtons}>
          <button>Hire Me</button>
          <button>Resume</button>
        </div>

        {/* Hamburger Icon */}
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
