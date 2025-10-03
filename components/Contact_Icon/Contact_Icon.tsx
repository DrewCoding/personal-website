"use client";

import styles from "./Contact_Icon.module.css";
import Image from "next/image";

export function Contact_Icon({ imageUrl, link }: contact) {
  return (
    <div className={styles.iconContainer}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt="o"
          width={30}
          height={30}
          style={{ cursor: "pointer" }}
        />
      </a>
    </div>
  );
}

export type contact = {
  imageUrl: string;
  link: string;
};
