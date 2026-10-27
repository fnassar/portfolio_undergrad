import TabIndicator from "../../animations/TabIndicator.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./ProjectTabs.module.css";

export default function ProjectTabs({ tabIds, active, onChange }) {
  const { t } = useLanguage();

  return (
    <div className={styles.tabs} role="tablist" aria-label={t.projects.tabsLabel}>
      {tabIds.map((id) => (
        <button
          key={id}
          role="tab"
          aria-selected={id === active}
          className={styles.tab}
          onClick={() => onChange(id)}
        >
          {t.projects.tabs[id]}
          {id === active ? <TabIndicator /> : null}
        </button>
      ))}
    </div>
  );
}
