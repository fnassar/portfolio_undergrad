import { useState } from "react";
import LinkButton from "../../components/LinkButton.jsx";
import Section from "../../components/Section.jsx";
import { email, profiles, resumeUrl } from "../../data/socials.js";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
  }

  return (
    <Section
      id="contact"
      kicker={t.contact.kicker}
      title={t.contact.title}
      className={styles.contactSection}
    >
      <button className={styles.email} onClick={copyEmail}>
        {email}
        <span className={styles.hint}>{copied ? t.contact.copied : t.contact.copy}</span>
      </button>
      <div className={styles.links}>
        {profiles.map((profile) => (
          <LinkButton key={profile.label} href={profile.href}>
            {profile.label}
          </LinkButton>
        ))}
        <LinkButton href={resumeUrl}>{t.contact.resume}</LinkButton>
      </div>
      <p className={styles.footer}>
        © {new Date().getFullYear()} {t.contact.name}
      </p>
    </Section>
  );
}
