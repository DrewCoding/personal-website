"use client";

import styles from "./Projects.module.css";
import { Project } from "../Project";
import { projects } from "../../data/projectData";

export function Projects() {
  return (
    <div className={styles.projectSection}>
      <div className={styles.projectWindow}>
        <div className={styles.title}> Projects</div>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              src={project.src}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
