"use client";

import { Footer } from "../Footer";
import { Introduction } from "../Introduction";
import { Projects } from "../Projects";
import { Contacts } from "../Contacts";
import { useState } from "react";

import styles from "./Main.module.css";

const pages = ["Introduction", "Projects", "Contacts"] as const;

type CurrentPage = (typeof pages)[number];

export function Main() {
  const [currPage, setCurrPage] = useState<CurrentPage>("Introduction");

  return (
    <div>
      <div className={styles.navBar}>
        <div className={styles.name}>Andrew Williams</div>
        <div className={styles.navButtons}>
          {pages.map((page, index) => (
            <button key={index} onClick={() => setCurrPage(page)}>
              {page}
            </button>
          ))}
        </div>
      </div>
      <main className={styles.content}>
        {currPage === "Introduction" && <Introduction />}
        {currPage === "Projects" && <Projects />}
        {currPage === "Contacts" && <Contacts />}
      </main>
      <Footer />
    </div>
  );
}
