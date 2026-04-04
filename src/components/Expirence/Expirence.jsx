import React from 'react';
import styles from './Expirence.module.css';
import skills from './../../Data/skills.json';
import history from './../../Data/history.json';

export const Expirence = () => {
  return (
    <section id="expirence" className={styles.container}>
      <h2 className={styles.title}>Skills & Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((s) => {
            return (
              <div key={s.id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={`assets/${s.imageSrc}`} alt={s.title} />
                </div>
                <p className={styles}>{s.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((h) => {
            return (
              <li key={h.id} className={styles.historyItem}>
                <img src={`/assets/${h.imageSrc}`} alt={h.organisation} />

                <div className={styles.historyItemDetails}>
                  <h3>{`${h.role}, ${h.organisation}`}</h3>
                  <p>{`${h.startDate} - ${h.endDate}`}</p>
                  <ul>
                    {h.experiences.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
