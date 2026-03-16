import React, { useState } from 'react';
import styles from './Nabar.module.css';

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuIsOpen
              ? '/assets/nav/closeIcon.png'
              : '/assets/nav/menuIcon.png'
          }
          alt="menu-btn"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />

        <ul className={`${styles.menuItems} ${menuIsOpen && styles.menuOpen}`}>
          <li>
            <a href="#about" onClick={() => setMenuIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#expirence" onClick={() => setMenuIsOpen(false)}>
              Expirence
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuIsOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
