import useLanguage from "../hooks/useLanguage.js";
import styles from "./TagList.module.css";

export default function TagList({ tags }) {
  const { t } = useLanguage();

  return (
    <ul className={styles.list}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {t.tags[tag] ?? tag}
        </li>
      ))}
    </ul>
  );
}
