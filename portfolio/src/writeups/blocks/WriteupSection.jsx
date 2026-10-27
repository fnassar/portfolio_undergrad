import styles from "./blocks.module.css";

export default function WriteupSection({ title, children }) {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>{title}</h3>
      {children}
    </section>
  );
}
