"use client";

import { Footer } from "../Footer";
import { Introduction } from "../Introduction";
import { Personal } from "../Personal";
import { Projects } from "../Projects";
import { Contacts } from "../Contacts";
import { useState } from "react";

import styles from "./Main.module.css";

const pages = ["Introduction", "Projects"] as const;

type CurrentPage = (typeof pages)[number];

export function Main() {
  const [currPage, setCurrPage] = useState<CurrentPage>("Introduction");

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.name}>
          <Personal />
        </div>
        <div className={styles.navButtons}>
          {pages.map((page, index) => (
            <button
              className={styles.button}
              key={index}
              onClick={() => setCurrPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <main className={styles.content}>
        {currPage === "Introduction" && (
          <div className={styles.fadeIn}>
            <Introduction />
          </div>
        )}
        {currPage === "Projects" && (
          <div className={styles.fadeIn}>
            <Projects />
          </div>
        )}
        {/* {currPage === "Contacts" && <Contacts />} */}
      </main>
      <Footer />
    </div>
  );
}
