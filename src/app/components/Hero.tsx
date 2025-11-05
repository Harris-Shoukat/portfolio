'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './Hero.module.css';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // === Scene Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.position.z = 8;

    // === Create circular dot texture ===
    const size = 64;
    const circleCanvas = document.createElement('canvas');
    circleCanvas.width = size;
    circleCanvas.height = size;
    const ctx = circleCanvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    const circleTexture = new THREE.Texture(circleCanvas);
    circleTexture.needsUpdate = true;

    // === Round Dot Material ===
    const material = new THREE.PointsMaterial({
      map: circleTexture,
      color: 0xe4e4e4,
      size: 0.1,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    // === Create Dots Geometry ===
    const dotCount = 600;
    const spread = 12;
    const positions = new Float32Array(dotCount * 3);

    for (let i = 0; i < dotCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // === Random Velocities ===
    const velocities = new Float32Array(dotCount * 2);
    for (let i = 0; i < velocities.length; i++) {
      velocities[i] = (Math.random() - 0.5) * 0.0003;
    }

    // === Animate Dots ===
    function animate() {
      requestAnimationFrame(animate);
      const pos = geometry.attributes.position.array;

      for (let i = 0; i < pos.length; i += 3) {
        pos[i] += velocities[i];
        pos[i + 1] += velocities[i + 1];
        pos[i + 2] += velocities[i + 2];

        // Bounce inside boundaries
        if (pos[i] > spread || pos[i] < -spread) velocities[i] *= -1;
        if (pos[i + 1] > spread || pos[i + 1] < -spread) velocities[i + 1] *= -1;
        if (pos[i + 2] > spread || pos[i + 2] < -spread) velocities[i + 2] *= -1;
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

      renderer.render(scene, camera);
    }

    animate();

    // === Resize Handling ===
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.backgroundCanvas}></canvas>
      <div className={styles.heroContent}>
        <p className={styles.title}>Hi, I'm Harris Shoukat</p>
        <p className={styles.subtitle}>Developer & Designer</p>
        <div className={styles.scrollIndicator}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 18L6 12L7.41 10.59L12 15.17L16.59 10.59L18 12L12 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
