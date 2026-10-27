import TagList from "../../components/TagList.jsx";
import BulletList from "../../writeups/blocks/BulletList.jsx";
import styles from "./ExperienceDetail.module.css";

export default function ExperienceDetail({ item }) {
  return (
    <article className={styles.detail}>
      <p className={styles.kicker}>{item.type}</p>
      <h2 className={styles.org}>{item.org}</h2>
      <p className={styles.role}>
        {item.role}
        {item.period ? ` · ${item.period}` : null}
      </p>
      <p>{item.summary}</p>
      <BulletList items={item.bullets} />
      <TagList tags={item.tags} />
    </article>
  );
}
