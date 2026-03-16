import React from 'react';
import styles from './About.module.css';
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src="/assets/about/about-img.png"
          alt="About image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/laptop.png" alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Full‑Stack Developer</h3>
              <p>
                I build apps end‑to‑end, React on the surface, Node under the
                hood, Mongo keeping the memory sharp.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/bug.png" alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Bug Hunter & Problem Solver</h3>
              <p>
                I chase down errors like they owe me rent. Debugging isn’t just
                fixing code, it’s turning chaos into clean, working solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/idea.png" alt="Cursor image" />
            <div className={styles.aboutItemText}>
              <h3>Creative Builder</h3>
              <p>
                When the IDE closes, Blender opens. I sculpt 3D worlds and bring
                them to life with Three.js, proving creativity and code can
                share the same brain.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
