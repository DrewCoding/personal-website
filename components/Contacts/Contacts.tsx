"use client";

import styles from "./Contacts.module.css";

export function Contacts() {
  return (
    <div className={styles.introductionContainer}>
      <div className={styles.box}>
        <h1 className={styles.introName}>Contact me!</h1>
        <p className={styles.introContent}>
          <a href="www.linkedin.com/in/andrew-williams-295a50223">
            {" "}
            Linked in{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
