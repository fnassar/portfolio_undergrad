import styles from "./blocks.module.css";

export default function CodeBlock({ code }) {
  return (
    <pre className={styles.code}>
      <code>{code}</code>
    </pre>
  );
}
