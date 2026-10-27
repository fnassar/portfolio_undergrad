import { lazy, Suspense } from "react";
import LinkButton from "../../components/LinkButton.jsx";
import TagList from "../../components/TagList.jsx";
import { projects } from "../../data/projects.js";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./ProjectDetail.module.css";

const writeups = Object.fromEntries(
  projects
    .filter((project) => project.loadWriteup)
    .map((project) => [project.id, lazy(project.loadWriteup)]),
);

export default function ProjectDetail({ project }) {
  const Writeup = writeups[project.id];
  const { lang, t, pick } = useLanguage();

  return (
    <article>
      <header className={styles.header}>
        <p className={styles.kicker}>{t.projects.tabs[project.category]}</p>
        <h2 className={styles.title}>{pick(project.title)}</h2>
        {project.team ? (
          <p className={styles.team}>
            {t.projects.with} {new Intl.ListFormat(lang).format(project.team)}
          </p>
        ) : null}
        <TagList tags={project.tags} />
        <div className={styles.links}>
          {project.links.map((link) => (
            <LinkButton key={link.href} href={link.href}>
              {t.links[link.label] ?? link.label}
            </LinkButton>
          ))}
        </div>
      </header>

      {Writeup ? (
        <Suspense fallback={<p className={styles.loading}>{t.projects.loading}</p>}>
          <Writeup />
        </Suspense>
      ) : (
        <>
          <img className={styles.image} src={project.image} alt="" />
          <p className={styles.summary}>{pick(project.summary)}</p>
        </>
      )}
    </article>
  );
}
