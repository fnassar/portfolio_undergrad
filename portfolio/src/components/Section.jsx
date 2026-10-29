import styles from "./Section.module.css";

// `aside` (optional) renders a side column that starts at the very top of the section.
export default function Section({ id, kicker, title, aside, className, ref, children }) {
  return (
    <section
      ref={ref}
      id={id}
      className={className ? `${styles.section} ${className}` : styles.section}
      data-aside={Boolean(aside)}
      aria-labelledby={`${id}-title`}
    >
      {aside ? <aside className={styles.aside}>{aside}</aside> : null}
      <div className={styles.main}>
        <header className={styles.header}>
          <p className={styles.kicker}>{kicker}</p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
