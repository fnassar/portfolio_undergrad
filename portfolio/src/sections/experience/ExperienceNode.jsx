import Float from "../../animations/Float.jsx";
import Magnet from "../../animations/Magnet.jsx";
import useLanguage from "../../hooks/useLanguage.js";
import styles from "./ExperienceNode.module.css";

export default function ExperienceNode({ item, index, onOpen }) {
  const { pick } = useLanguage();

  return (
    <li>
      <Float index={index}>
        <Magnet>
          <button
            className={styles.node}
            style={{ "--node-color": item.color }}
            data-type={item.type}
            onClick={onOpen}
          >
            <span className={styles.diamond} aria-hidden="true" />
            <span className={styles.org}>{pick(item.org)}</span>
            {item.period ? <span className={styles.meta}>{item.period}</span> : null}
          </button>
        </Magnet>
      </Float>
    </li>
  );
}
