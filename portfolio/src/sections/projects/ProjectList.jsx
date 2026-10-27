import { memo, useRef } from "react";
import useActiveId from "../../hooks/useActiveId.js";
import ProjectRow from "./ProjectRow.jsx";
import styles from "./ProjectList.module.css";

function ProjectList({ projects, onActiveChange }) {
  const listRef = useRef(null);
  useActiveId(listRef, onActiveChange);

  return (
    <ol ref={listRef} className={styles.list}>
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </ol>
  );
}

export default memo(ProjectList);
