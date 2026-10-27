import styles from "./blocks.module.css";

export default function BulletList({ items, ordered = false }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </List>
  );
}
