"use client";

import Image from "next/image";
import { project } from "../../lists/Projects";
import style from "./Project.module.css";

export function Project({
  title,
  description,
  techStack,
  imageUrl,
  link,
}: project) {
  return (
    <div className={style.container}>
      <h1>{title}</h1>
      <div>{imageUrl && <img src={imageUrl} width={550} />}</div>
      <div>{description}</div>
      <div>{techStack}</div>
      <div>{link}</div>
    </div>
  );
}
