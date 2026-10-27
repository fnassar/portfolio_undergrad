import TextReveal from "../../animations/TextReveal.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header id="top" className={styles.hero}>
      <h1 className={styles.name}>
        <TextReveal text="Fatema Nassar" className={styles.latin} />
        <TextReveal text="فاطمة نصار" delay={0.3} className={styles.arabic} />
      </h1>
      <p className={`${styles.tagline} ${styles.latin}`}>
        <TextReveal text="Software Developer & Interactive Media Artist" delay={0.6} />
      </p>
      <p className={`${styles.tagline} ${styles.arabic}`}>
        <TextReveal text="مهندسة برمجيات وفنانة وسائط تفاعلية" delay={0.8} />
      </p>
      <a className={styles.cue} href="#projects">
        {t.hero.cue}
      </a>
    </header>
  );
}
