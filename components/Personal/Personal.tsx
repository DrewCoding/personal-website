"use client";

import styles from "./Personal.module.css";
import { Contact_Icon } from "../Contact_Icon";

export function Personal() {
  return (
    <div className={styles.personalContainer}>
      <div className={styles.introName}>Hi, I&apos;m Andrew Williams</div>
      <div className={styles.description}>
        Software Engineer, Frontend Developer, Game Developer
      </div>
      <div className={styles.iconRow}>
        {contacts.map((contact, index) => (
          <Contact_Icon
            key={index}
            imageUrl={contact.imageUrl}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
}

export const contacts = [
  {
    imageUrl: "/assets/linkedin-logo.PNG",
    link: "http://www.linkedin.com/in/andrew-williams-295a50223",
  },
  {
    imageUrl: "/assets/github-logo.PNG",
    link: "https://github.com/DrewCoding",
  },
  {
    imageUrl: "/assets/email-logo.PNG",
    link: "mailto:drewwilliams9090@gmail.com",
  },
];
