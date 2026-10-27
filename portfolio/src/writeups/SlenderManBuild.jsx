import BulletList from "./blocks/BulletList.jsx";
import Columns from "./blocks/Columns.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
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

const pageDesigns = pageNames.map((name, index) => ({
  src: `/images/IM/docs/slenderman/pages/${name}.JPEG`,
  alt: `Page design ${index + 1}`,
}));

export default function SlenderManBuild() {
  return (
    <>
      <WriteupSection title="IV. Future Improvements">
        <Columns>
          <Panel title="Expansion Ideas">
            <BulletList
              items={[
                "Custom scavenger hunt creation tool",
                "Enhanced Slenderman theme with jumpscares and music",
                "Improved UI for the info button",
                "Audio feedback for found pages",
              ]}
            />
          </Panel>
          <Panel title="Technical Improvements">
            <BulletList
              items={[
                "Retrain ML models for better accuracy",
                "Fix iOS/Android compatibility issues",
                "Enhanced user personalization",
                "Fix room-specific socket data issues",
              ]}
            />
          </Panel>
        </Columns>
      </WriteupSection>

      <WriteupSection title="V. Technical Implementation">
        <Columns>
          <Panel title="Socket.io">
            <BulletList
              items={[
                "Real-time multiplayer functionality",
                "Room-based user management",
                "Score synchronization across players",
                "Game state management",
              ]}
            />
          </Panel>
          <Panel title="ML5.js">
            <p>
              Resources:{" "}
              <ExternalLink href="https://learn.ml5js.org/#/">
                ML5.js documentation
              </ExternalLink>
              ,{" "}
              <ExternalLink href="https://thecodingtrain.com/learning/ml5/">
                The Coding Train tutorials
              </ExternalLink>
              .
            </p>
            <BulletList
              ordered
              items={[
                "Object Detection with COCO-SD",
                "Feature Extractor Classification",
                "Separate training page with model saving",
              ]}
            />
          </Panel>
        </Columns>
        <h4>Page Designs</h4>
        <Gallery images={pageDesigns} columns={4} />
      </WriteupSection>

      <SlenderManTeam />
    </>
  );
}
