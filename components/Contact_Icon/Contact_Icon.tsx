"use client";

import styles from "./Contact_Icon.module.css";

export function Contact_Icon({ imageUrl, link }: contact) {
  return (
    <div className={styles.iconContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          alt="o"
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export type contact = {
  imageUrl: string;
  link: string;
};
