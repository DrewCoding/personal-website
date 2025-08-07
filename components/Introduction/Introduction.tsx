"use client";

import styles from "./Introduction.module.css";

export function Introduction() {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.box}>
        <h1 className={styles.introName}>Introduction</h1>
        <p className={styles.introContent}>
          Hello! I'm Andrew Williams, a passionate developer with a love for
          creating innovative solutions. Explore my work and feel free to reach
          out!
        </p>
      </div>
    </div>
  );
}
