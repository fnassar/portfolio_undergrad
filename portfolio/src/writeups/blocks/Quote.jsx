import styles from "./blocks.module.css";

export default function Quote({ text }) {
  return (
    <blockquote className={styles.quote}>
      <p>“{text}”</p>
    </blockquote>
  );
}
