import TiltImage from "../../animations/TiltImage.jsx";
import TagList from "../../components/TagList.jsx";
import { projectHash } from "../../hooks/useHashModal.js";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./ProjectRow.module.css";

export default function ProjectRow({ project }) {
  const { pick } = useLanguage();

  return (
    <li className={styles.row} data-id={project.id}>
      <a
        className={styles.link}
        href={projectHash(project.id)}
        onPointerEnter={project.loadWriteup}
        onFocus={project.loadWriteup}
      >
        <TiltImage src={project.image} alt="" />
        <div>
          <h3 className={styles.title}>{pick(project.title)}</h3>
          <p className={styles.summary}>{pick(project.summary)}</p>
          <TagList tags={project.tags} />
        </div>
      </a>
    </li>
  );
}
