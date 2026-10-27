import { Activity, startTransition, useRef, useState } from "react";
import Modal from "../../components/Modal.jsx";
import Section from "../../components/Section.jsx";
import { projects, projectsByCategory } from "../../data/projects.js";
import useHashModal from "../../hooks/useHashModal.js";
import useLanguage from "../../hooks/useLanguage.js";
import ProjectDetail from "./ProjectDetail.jsx";
import ProjectList from "./ProjectList.jsx";
import ProjectTabs from "./ProjectTabs.jsx";
import styles from "./ProjectsSection.module.css";

const tabIds = ["code", "art"];

export default function ProjectsSection() {
  const [tab, setTab] = useState("code");
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);
  const listsRef = useRef(null);
  const modal = useHashModal();
  const { t, pick } = useLanguage();

  const tabProjects = projectsByCategory[tab];
  const active = tabProjects.find((project) => project.id === activeId) ?? tabProjects[0];
  const position = String(tabProjects.indexOf(active) + 1).padStart(2, "0");
  const total = String(tabProjects.length).padStart(2, "0");
  const colors = {
    code: tab === "code" ? active.colors : projectsByCategory.code[0].colors,
    art: tab === "art" ? active.colors : projectsByCategory.art[0].colors,
  };
  const openProject = projects.find((project) => project.id === modal.id);

  function selectTab(next) {
    startTransition(() => setTab(next));
    sectionRef.current.scrollIntoView({ block: "start" });
  }

  return (
    <Section
      ref={sectionRef}
      id="work"
      kicker={t.projects.kicker}
      title={t.projects.title}
      aside={
        <div className={styles.pin}>
          <ProjectTabs
            tabIds={tabIds}
            active={tab}
            onChange={selectTab}
            colors={colors}
            targetRef={listsRef}
            count={`${position} / ${total}`}
          />
        </div>
      }
    >
      <div ref={listsRef}>
        {tabIds.map((id) => (
          <Activity key={id} mode={id === tab ? "visible" : "hidden"}>
            <ProjectList projects={projectsByCategory[id]} onActiveChange={setActiveId} />
          </Activity>
        ))}
      </div>

      {openProject ? (
        <Modal
          label={pick(openProject.title)}
          color={openProject.colors[0]}
          onClose={modal.close}
        >
          <ProjectDetail project={openProject} />
        </Modal>
      ) : null}
    </Section>
  );
}
