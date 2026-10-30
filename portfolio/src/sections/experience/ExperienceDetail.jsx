import ExternalLink from "../../components/ExternalLink.jsx";
import TagList from "../../components/TagList.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import BulletList from "../../writeups/blocks/BulletList.jsx";
import styles from "./ExperienceDetail.module.css";

export default function ExperienceDetail({ item }) {
  const { t, pick } = useLanguage();

  return (
    <article className={styles.detail}>
      <p className={styles.kicker}>{t.experience.types[item.type]}</p>
      <h2 className={styles.org}>
        {item.link ? (
          <ExternalLink className={styles.orgLink} href={item.link}>
            {pick(item.org)} <span className={styles.arrow} aria-hidden="true">↗</span>
          </ExternalLink>
        ) : (
          pick(item.org)
        )}
      </h2>
      <p className={styles.role}>
        {pick(item.role)}
        {item.period ? ` · ${item.period}` : null}
      </p>
      <p>{pick(item.summary)}</p>
      <BulletList items={item.bullets.map(pick)} />
      <TagList tags={item.tags} />
    </article>
  );
}
