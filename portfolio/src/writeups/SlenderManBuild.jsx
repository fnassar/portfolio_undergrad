import ExternalLink from "../components/ExternalLink.jsx";
import BulletList from "./blocks/BulletList.jsx";
import Columns from "./blocks/Columns.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";
import SlenderManTeam from "./SlenderManTeam.jsx";

const pageNames = [
  "alone",
  "cant_run",
  "dont_look",
  "follows",
  "forest",
  "help_me",
  "no_eyes",
  "nonono",
];

export default function SlenderManBuild({ t }) {
  const pageDesigns = pageNames.map((name, index) => ({
    src: `/images/IM/docs/slenderman/pages/${name}.JPEG`,
    alt: `${t.tech.pageAlt} ${index + 1}`,
  }));

  return (
    <>
      <WriteupSection title={t.future.title}>
        <Columns>
          <Panel title={t.future.expansionTitle}>
            <BulletList items={t.future.expansion} />
          </Panel>
          <Panel title={t.future.technicalTitle}>
            <BulletList items={t.future.technical} />
          </Panel>
        </Columns>
      </WriteupSection>

      <WriteupSection title={t.tech.title}>
        <Columns>
          <Panel title={t.tech.socketTitle}>
            <BulletList items={t.tech.socket} />
          </Panel>
          <Panel title={t.tech.ml5Title}>
            <p>
              {t.tech.resources}{" "}
              <ExternalLink href="https://learn.ml5js.org/#/">
                {t.tech.docsLink}
              </ExternalLink>
              {" · "}
              <ExternalLink href="https://thecodingtrain.com/learning/ml5/">
                {t.tech.tutorialsLink}
              </ExternalLink>
            </p>
            <BulletList ordered items={t.tech.steps} />
          </Panel>
        </Columns>
        <h4>{t.tech.pagesTitle}</h4>
        <Gallery images={pageDesigns} columns={4} />
      </WriteupSection>

      <SlenderManTeam t={t.team} />
    </>
  );
}
