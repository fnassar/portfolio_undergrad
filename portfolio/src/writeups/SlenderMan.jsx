import BulletList from "./blocks/BulletList.jsx";
import CodeBlock from "./blocks/CodeBlock.jsx";
import Columns from "./blocks/Columns.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";
import SlenderManBuild from "./SlenderManBuild.jsx";

const DIR = "/images/IM/docs/slenderman";

const mobileQuery = `@media only screen and (max-width: 850px) {
  /* Mobile-specific styles */
}`;

const uiFlow = [
  { src: `${DIR}/one.png`, caption: "Username & Room Entry" },
  { src: `${DIR}/two.png`, caption: "Loading Screen" },
  { src: `${DIR}/five.png`, caption: "Gameplay with AR" },
  { src: `${DIR}/three.png`, caption: "Player Scores" },
  {
    src: `${DIR}/six.png`,
    caption: "Page Found: visual confirmation when scanning succeeds",
  },
  { src: `${DIR}/seven.png`, caption: "Win Screen: shown to the highest scoring player" },
  { src: `${DIR}/eight.png`, caption: "Lose Screen: shown to other players" },
  { src: `${DIR}/wireframe.png`, caption: "Wireframe" },
];

const testingPhotos = ["test1", "test2", "test3", "test4", "test5"].map(
  (name, index) => ({
    src: `${DIR}/${name}.jpeg`,
    alt: `User testing ${index + 1}`,
  }),
);

const feedback = [
  "Positive: enjoyable gameplay and attractive aesthetics",
  "Issue: some ML5.js model detection glitches",
  "UI improvement: make the top-right button more noticeable",
  "Suggestion: add sound effects for found pages",
];

export default function SlenderMan() {
  return (
    <>
      <WriteupSection title="I. Description">
        <p>
          <em>Slenderman's Scavenger Hunt</em> is a multiplayer online game inspired by{" "}
          <ExternalLink href="https://en.wikipedia.org/wiki/Slender_Man">
            an Internet creepypasta from 2009
          </ExternalLink>{" "}
          with the playability of the traditional game of scavenger hunt. The
          mobile-optimized website uses{" "}
          <ExternalLink href="https://ml5js.org/">ML5.js</ExternalLink> for object
          detection.
        </p>
        <p>
          Players enter a username and join a room (up to 5 players). Using their phone's
          camera, they scan objects to get location hints in this augmented reality
          scavenger hunt with a creepy Slenderman theme.
        </p>
      </WriteupSection>

      <WriteupSection title="II. Design & Evolution">
        <p>We designed a simple, intuitive layout specifically for mobile devices:</p>
        <CodeBlock code={mobileQuery} />
        <Gallery images={uiFlow} columns={4} />
      </WriteupSection>

      <WriteupSection title="III. User Testing">
        <Columns>
          <Panel title="Testing Process">
            <p>
              We tested with campus community members familiar with the environment.
              Testers included Professor Mathura Govindarajan and IM Lab Manager Ume
              Hussain.
            </p>
            <Gallery images={testingPhotos} />
          </Panel>
          <Panel title="Key Feedback">
            <BulletList items={feedback} />
          </Panel>
        </Columns>
      </WriteupSection>

      <SlenderManBuild />
    </>
  );
}
