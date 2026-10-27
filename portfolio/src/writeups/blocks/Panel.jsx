import styles from "./blocks.module.css";

export default function Panel({ title, children }) {
  return (
    <div className={styles.panel}>
      {title ? <h4 className={styles.panelTitle}>{title}</h4> : null}
      {children}
    </div>
  );
}
