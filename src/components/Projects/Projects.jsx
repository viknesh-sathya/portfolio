import React, { useRef, useState } from 'react';
import styles from './Project.module.css';
import projects from './../../Data/projects.json';

export const Project = () => {
  const sliderRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState('All');

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  // Collect unique skills (normalize case)
  const allSkills = ['All', ...new Set(projects.flatMap((p) => p.skills))];

  // Filter projects based on dropdown (case-insensitive)
  const filteredProjects =
    selectedSkill === 'All'
      ? projects
      : projects.filter((p) =>
          p.skills.some(
            (skill) => skill.toLowerCase() === selectedSkill.toLowerCase(),
          ),
        );

  return (
    <section id="projects" className={styles.container}>
      <h2 className={styles.title}>Projects</h2>

      {/* Dropdown filter */}
      <div className={styles.filter}>
        <label htmlFor="skillFilter">Filter by skill:</label>
        <select
          id="skillFilter"
          value={selectedSkill}
          onChange={(e) => setSelectedSkill(e.target.value)}
        >
          {allSkills.map((skill, i) => (
            <option key={i} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={scrollLeft}>
          &#10094;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {filteredProjects.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={`/assets/projects/${p.imageSrc}`} alt={p.title} />
                <div className={styles.overlay}>
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <img
                      src="assets/others/eye-open.png"
                      alt="Live"
                      title="Live link"
                    />
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <img
                      src="assets/others/github.png"
                      alt="GitHub"
                      title="Source code"
                    />
                  </a>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{p.title}</h3>
                <p>{p.skills.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </section>
  );
};
