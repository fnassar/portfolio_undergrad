import styles from "./Section.module.css";

export default function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <p className={styles.kicker}>{kicker}</p>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
