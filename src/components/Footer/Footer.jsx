import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.links}>
        <a href="mailto:iamviknesh.sathya@gmail.com" className={styles.link}>
          <img src="/assets/contact/emailIcon.png" alt="Email" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/viknesh-sathya"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn" />
          LinkedIn
        </a>
        <a
          href="https://github.com/viknesh-sathya"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img src="/assets/contact/githubIcon.png" alt="GitHub" />
          Github
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Viknesh Sathya. All rights reserved.
      </p>
    </footer>
  );
};
