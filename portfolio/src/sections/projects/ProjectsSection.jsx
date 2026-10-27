import { Activity, startTransition, useRef, useState } from "react";
import ScrollRects from "../../animations/ScrollRects.jsx";
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
  const listsRef = useRef(null);
  const modal = useHashModal();
  const { t, pick } = useLanguage();

  const tabProjects = projectsByCategory[tab];
  const active = tabProjects.find((project) => project.id === activeId) ?? tabProjects[0];
  const position = String(tabProjects.indexOf(active) + 1).padStart(2, "0");
  const total = String(tabProjects.length).padStart(2, "0");
  const openProject = projects.find((project) => project.id === modal.id);

  return (
    <Section id="work" kicker={t.projects.kicker} title={t.projects.title}>
      <div className={styles.layout}>
        <aside className={styles.aside}>
          <ScrollRects
            targetRef={listsRef}
            colors={active.colors}
            label={`${t.projects.tabs[tab]} · ${position} / ${total}`}
          />
        </aside>

        <div>
          <ProjectTabs
            tabIds={tabIds}
            active={tab}
            onChange={(next) => startTransition(() => setTab(next))}
          />
          <div ref={listsRef}>
            {tabIds.map((id) => (
              <Activity key={id} mode={id === tab ? "visible" : "hidden"}>
                <ProjectList
                  projects={projectsByCategory[id]}
                  onActiveChange={setActiveId}
                />
              </Activity>
            ))}
          </div>
        </div>
      </div>

      {openProject ? (
        <Modal
          label={pick(openProject.title)}
          color={openProject.colors.a}
          onClose={modal.close}
        >
          <ProjectDetail project={openProject} />
        </Modal>
      ) : null}
    </Section>
  );
}
