import Section from "../../components/Section.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./About.module.css";

export default function About() {
  const { t } = useLanguage();
  // edit later
  return (
    <Section
      id="about"
      kicker={t.about.kicker}
      title={t.about.title}
      className={styles.aboutSection}
    >
      <div className={styles.body}>
        <p className={styles.lead}>{t.about.lead}</p>
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
