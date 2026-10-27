import { useState } from "react";
import { email, profiles, resumeUrl } from "../data/socials.js";
import ExternalLink from "./ExternalLink.jsx";
import Icon from "./Icon.jsx";
import styles from "./Nav.module.css";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const iconLinks = [
  { label: "Email", href: `mailto:${email}`, icon: "mail" },
  ...profiles,
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.nav} data-open={open}>
      <a className={styles.brand} href="#top">
        Fatema<span>Nassar</span>
      </a>

      <button
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <div id="nav-menu" className={styles.menu}>
        <ul className={styles.links}>
          {sections.map((section) => (
            <li key={section.href}>
              <a href={section.href} onClick={() => setOpen(false)}>
                {section.label}
              </a>
            </li>
          ))}
          <li>
            <ExternalLink href={resumeUrl}>Resume ↗</ExternalLink>
          </li>
        </ul>

        <ul className={styles.socials}>
          {iconLinks.map((link) => (
            <li key={link.label}>
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
