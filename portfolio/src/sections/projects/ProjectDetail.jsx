import { lazy, Suspense } from "react";
import LinkButton from "../../components/LinkButton.jsx";
import TagList from "../../components/TagList.jsx";
import { projects } from "../../data/projects.js";
import styles from "./ProjectDetail.module.css";

const writeups = Object.fromEntries(
  projects
    .filter((project) => project.loadWriteup)
    .map((project) => [project.id, lazy(project.loadWriteup)]),
);

export default function ProjectDetail({ project }) {
  const Writeup = writeups[project.id];

  return (
    <article className={styles.detail}>
      <header className={styles.header}>
        <p className={styles.kicker}>{project.category}</p>
        <h2 className={styles.title}>{project.title}</h2>
        {project.team ? (
          <p className={styles.team}>With {project.team.join(", ")}</p>
        ) : null}
        <TagList tags={project.tags} />
        <div className={styles.links}>
          {project.links.map((link) => (
            <LinkButton key={link.href} href={link.href}>
              {link.label}
            </LinkButton>
          ))}
        </div>
      </header>

      {Writeup ? (
        <Suspense fallback={<p className={styles.loading}>Loading…</p>}>
          <Writeup />
        </Suspense>
      ) : (
        <>
          <img className={styles.image} src={project.image} alt="" />
          <p className={styles.summary}>{project.summary}</p>
        </>
      )}
    </article>
  );
}
