import { useState } from "react";
import ConstellationLine from "../../animations/ConstellationLine.jsx";
import Modal from "../../components/Modal.jsx";
import Section from "../../components/Section.jsx";
import { experience } from "../../data/experience.js";
import ExperienceDetail from "./ExperienceDetail.jsx";
import ExperienceNode from "./ExperienceNode.jsx";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  const [openId, setOpenId] = useState(null);
  const openItem = experience.find((item) => item.id === openId);

  return (
    <Section id="experience" kicker="Click a node" title="Experience">
      <div className={styles.map}>
        <ConstellationLine count={experience.length} />
        <ol className={styles.nodes}>
          {experience.map((item, index) => (
            <ExperienceNode
              key={item.id}
              item={item}
              index={index}
              onOpen={() => setOpenId(item.id)}
            />
          ))}
        </ol>
      </div>

      {openItem ? (
        <Modal
          label={openItem.org}
          color={openItem.color}
          onClose={() => setOpenId(null)}
        >
          <ExperienceDetail item={openItem} />
        </Modal>
      ) : null}
    </Section>
  );
}
