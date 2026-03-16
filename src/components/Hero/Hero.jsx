import React from 'react';
import styles from './Hero.module.css';
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hello👋, I'm
          <br />
          <span>Viknesh&nbsp;Sathya,</span>
        </h1>
        <p className={styles.description}>
          Full‑stack MERN developer with 4+&nbsp;years of experience. Reach out
          if you'd like to collaborate!
        </p>

        <a
          href="/assets/resume.pdf"
          download="Viknesh-resume.pdf"
          className={styles.contactBtn}
        >
          Download Resume
        </a>
      </div>
      <img
        className={styles.heroImg}
        // src="https://images.unsplash.com/vector-1762072064913-612bfc85fc84?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        src="/assets/hero/hero-img.png"
        alt="Hero image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
