import Section from "../../components/Section.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about" kicker="Hello" title="About">
      <div className={styles.body}>
        <p className={styles.lead}>
          I'm a programmer who loves problem-solving, finding ways to do things I didn't
          know I could, and probably likes debugging more than I should.
        </p>
        <p>
          I also have an inner artist I can't seem to suppress. Interactive media became
          my outlet for that side: a way to create and express the parts of me that a
          program with a fixed expected output can't show.
        </p>
        <p>
          What I want next is to break problems apart with people who learn from each
          other, pick up new tools and build new connections along the way.
        </p>
      </div>
    </Section>
  );
}
