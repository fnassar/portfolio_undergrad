import Float from "../../animations/Float.jsx";
import Magnet from "../../animations/Magnet.jsx";
import styles from "./ExperienceNode.module.css";

export default function ExperienceNode({ item, index, onOpen }) {
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
            <span className={styles.org}>{item.org}</span>
            {item.period ? <span className={styles.meta}>{item.period}</span> : null}
          </button>
        </Magnet>
      </Float>
    </li>
  );
}
