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
          Full&#8209;stack MERN developer with 4+&nbsp;years of experience. Open
          to collaborations & opportunities.
        </p>

        <a
          href="/assets/viknesh-resume-mern.pdf"
          download="Viknesh-resume.pdf"
          className={styles.contactBtn}
        >
          Download Resume
        </a>
      </div>
      <img
        className={styles.heroImg}
        src="/assets/hero/hero-man.png"
        alt="Hero image AI generated"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
