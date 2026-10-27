import TextReveal from "../../animations/TextReveal.jsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <h1 className={styles.name}>
        <TextReveal text="Fatema Nassar" />
        <TextReveal text="فاطمة نصار" delay={0.3} className={styles.arabic} />
      </h1>
      <p className={styles.tagline}>
        <TextReveal text="Software Developer & Interactive Media Artist" delay={0.6} />
      </p>
      <p className={`${styles.tagline} ${styles.arabic}`}>
        <TextReveal text="مهندسة برمجيات وفنانة وسائط تفاعلية" delay={0.8} />
      </p>
      <a className={styles.cue} href="#work">
        Scroll to work ↓
      </a>
    </header>
  );
}
