import styles from "./blocks.module.css";

export default function Collapsible({ title, open = false, children }) {
  return (
    <details className={styles.collapsible} open={open}>
      <summary>{title}</summary>
      {children}
    </details>
  );
}
