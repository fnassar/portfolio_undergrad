import ExternalLink from "../components/ExternalLink.jsx";
import useLanguage from "../hooks/useLanguage.js";
import ar from "../i18n/ar/slenderMan.json";
import en from "../i18n/en/slenderMan.json";
import BulletList from "./blocks/BulletList.jsx";
import CodeBlock from "./blocks/CodeBlock.jsx";
import Columns from "./blocks/Columns.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";
import SlenderManBuild from "./SlenderManBuild.jsx";

const text = { en, ar };
const DIR = "/images/IM/docs/slenderman";
const uiFlowFiles = ["one", "two", "five", "three", "six", "seven", "eight", "wireframe"];
const testingFiles = ["test1", "test2", "test3", "test4", "test5"];
const mobileQuery = `@media only screen and (max-width: 850px) {
  /* Mobile-specific styles */
}`;

export default function SlenderMan() {
  const t = useLanguage().pick(text);
  const uiFlow = uiFlowFiles.map((name, index) => ({
    src: `${DIR}/${name}.png`,
    caption: t.design.uiFlow[index],
  }));
  const testingPhotos = testingFiles.map((name, index) => ({
    src: `${DIR}/${name}.jpeg`,
    alt: `${t.testing.photoAlt} ${index + 1}`,
  }));

  return (
    <>
      <WriteupSection title={t.description.title}>
        <p>
          {t.description.beforeLink}{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Slender_Man">
            {t.description.creepypastaLink}
          </ExternalLink>{" "}
          {t.description.betweenLinks}{" "}
          <ExternalLink href="https://ml5js.org/">ML5.js</ExternalLink>{" "}
          {t.description.afterLink}
        </p>
        <p>{t.description.players}</p>
      </WriteupSection>

      <WriteupSection title={t.design.title}>
        <p>{t.design.intro}</p>
        <CodeBlock code={mobileQuery} />
        <Gallery images={uiFlow} columns={4} />
      </WriteupSection>

      <WriteupSection title={t.testing.title}>
        <Columns>
          <Panel title={t.testing.processTitle}>
            <p>{t.testing.process}</p>
            <Gallery images={testingPhotos} />
          </Panel>
          <Panel title={t.testing.feedbackTitle}>
            <BulletList items={t.testing.feedback} />
          </Panel>
        </Columns>
      </WriteupSection>

      <SlenderManBuild t={t} />
    </>
  );
}
