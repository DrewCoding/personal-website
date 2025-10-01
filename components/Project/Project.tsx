"use client";

import Image from "next/image";
import { VideoPlayer } from "../VideoPlayer";
import { project } from "../../lists/Projects";
import style from "./Project.module.css";

export function Project({ title, description, techStack, src, link }: project) {
  return (
    <div className={style.container}>
      <div className={style.image}>
        {src && <VideoPlayer videoName={src} />}
      </div>
      <div className={style.textInfo}>
        <div className={style.name}>{title}</div>
        <div>{description}</div>
        <div className={style.techStack}>
          {techStack.map((tech, index) => (
            <span key={index} className={style.techItem}>
              {tech}
            </span>
          ))}
        </div>
        <div className={style.link}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className={style.button}>Visit Project</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
