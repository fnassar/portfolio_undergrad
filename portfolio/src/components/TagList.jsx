import styles from "./TagList.module.css";

export default function TagList({ tags }) {
  return (
    <ul className={styles.list}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
