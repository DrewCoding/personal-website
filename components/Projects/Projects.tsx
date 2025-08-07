"use client";

import styles from "./Projects.module.css";
import { Project } from "../Project";
import { projects } from "../../data/projectData";

export function Projects() {
  return (
    <section className={styles.projectSection}>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
