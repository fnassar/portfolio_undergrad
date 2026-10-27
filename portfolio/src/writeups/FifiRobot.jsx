import ExternalLink from "../components/ExternalLink.jsx";
import useLanguage from "../hooks/useLanguage.js";
import ar from "../i18n/ar/fifiRobot.json";
import en from "../i18n/en/fifiRobot.json";
import BulletList from "./blocks/BulletList.jsx";
import Columns from "./blocks/Columns.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";
import FifiTechnical from "./FifiTechnical.jsx";

const text = { en, ar };
const buildFiles = ["cactus", "robot1", "robot2", "robot3", "robot4"];
const timelineLinks = [
  "https://www.youtube.com/watch?v=lRXLAeogv5U",
  "https://youtube.com/shorts/kRtGvE6MrPE",
];

export default function FifiRobot() {
  const t = useLanguage().pick(text);
  const build = buildFiles.map((name, index) => ({
    src: `/images/IM/docs/fifi/${name}.jpg`,
    caption: t.build[index],
  }));

  return (
    <>
      <p>{t.intro}</p>
      <VideoEmbed src="https://www.youtube.com/embed/Z11REMjYteA" title={t.videoTitle} />

      <WriteupSection title={t.timelineTitle}>
        <Columns>
          {t.timeline.map((entry, index) => (
            <Panel key={entry.date} title={entry.date}>
              <p>{entry.text}</p>
              <ExternalLink href={timelineLinks[index]}>{entry.link}</ExternalLink>
            </Panel>
          ))}
        </Columns>
      </WriteupSection>

      <WriteupSection title={t.conceptTitle}>
        <Columns>
          <Panel title={t.charactersTitle}>
            <BulletList items={t.characters} />
          </Panel>
          <Panel title={t.scriptTitle}>
            <BulletList items={t.script} />
          </Panel>
        </Columns>
      </WriteupSection>

      <WriteupSection title={t.productionTitle}>
        <Gallery images={build} />
        <Panel title={t.challengesTitle}>
          <BulletList items={t.challenges} />
        </Panel>
      </WriteupSection>

      <FifiTechnical t={t} />
    </>
  );
}
