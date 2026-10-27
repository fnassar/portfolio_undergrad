import ExternalLink from "./ExternalLink.jsx";
import styles from "./LinkButton.module.css";

export default function LinkButton({ href, children }) {
  return (
    <ExternalLink className={styles.link} href={href}>
      {children} <span aria-hidden="true">↗</span>
    </ExternalLink>
  );
}
