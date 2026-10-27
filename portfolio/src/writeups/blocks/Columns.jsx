import styles from "./blocks.module.css";

export default function Columns({ children }) {
  return <div className={styles.columns}>{children}</div>;
}
