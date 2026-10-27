import TabIndicator from "../../animations/TabIndicator.jsx";
import styles from "./ProjectTabs.module.css";

export default function ProjectTabs({ tabs, active, onChange }) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Project categories">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={tab.id === active}
          className={styles.tab}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
          {tab.id === active ? <TabIndicator /> : null}
        </button>
      ))}
    </div>
  );
}
