import { useState } from "react";
import LinkButton from "../../components/LinkButton.jsx";
import Section from "../../components/Section.jsx";
import { email, profiles, resumeUrl } from "../../data/socials.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
  }

  return (
    <Section id="contact" kicker="Say hi" title="Let's talk">
      <button className={styles.email} onClick={copyEmail}>
        {email}
        <span className={styles.hint}>{copied ? "Copied ✓" : "Click to copy"}</span>
      </button>
      <div className={styles.links}>
        {profiles.map((profile) => (
          <LinkButton key={profile.label} href={profile.href}>
            {profile.label}
          </LinkButton>
        ))}
        <LinkButton href={resumeUrl}>Resume</LinkButton>
      </div>
      <p className={styles.footer}>© {new Date().getFullYear()} Fatema Nassar</p>
    </Section>
  );
}
