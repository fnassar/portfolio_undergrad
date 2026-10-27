import ShapeCluster from "../../animations/ShapeCluster.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./ProjectTabs.module.css";

export default function ProjectTabs({
  tabIds,
  active,
  onChange,
  colors,
  targetRef,
  count,
}) {
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
          <span className={styles.art}>
            <ShapeCluster
              set={id}
              colors={colors[id]}
              targetRef={targetRef}
              active={id === active}
            />
          </span>
          <span className={styles.label}>
            {t.projects.tabs[id]}
            {id === active ? (
              <span className={styles.count} dir="ltr">
                {count}
              </span>
            ) : null}
          </span>
        </button>
      ))}
    </div>
  );
}
