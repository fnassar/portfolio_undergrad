import { useState } from "react";
import { email, profiles, resumeUrl } from "../data/socials.js";
import useLanguage from "../hooks/useLanguage.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import styles from "./Nav.module.css";

const sectionIds = ["work", "experience", "about", "contact"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { t, toggle } = useLanguage();
  const iconLinks = [
    { label: t.nav.email, href: `mailto:${email}`, icon: "mail" },
    ...profiles,
  ];

  return (
    <nav className={styles.nav} data-open={open}>
      <a className={styles.brand} href="#top">
        {t.brand.first}
        <span>{t.brand.last}</span>
      </a>

      <button
        className={styles.language}
        aria-label={t.nav.languageLabel}
        onClick={toggle}
      >
        {t.nav.language}
      </button>

      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? t.nav.close : t.nav.menu}
      </button>

      <div id="nav-menu" className={styles.menu}>
        <ul className={styles.links}>
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>
                {t.nav[id]}
              </a>
            </li>
          ))}
          <li>
            <ExternalLink href={resumeUrl}>{t.nav.resume} ↗</ExternalLink>
          </li>
        </ul>

        <ul className={styles.socials}>
          {iconLinks.map((link) => (
            <li key={link.icon}>
              <ExternalLink href={link.href} label={link.label}>
                <Icon name={link.icon} />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
