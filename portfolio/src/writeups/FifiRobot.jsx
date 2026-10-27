import BulletList from "./blocks/BulletList.jsx";
import Columns from "./blocks/Columns.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";
import FifiTechnical from "./FifiTechnical.jsx";

const DIR = "/images/IM/docs/fifi";

const build = [
  { src: `${DIR}/cactus.jpg`, caption: "Concept: initial cactus-inspired design" },
  {
    src: `${DIR}/robot1.jpg`,
    caption: "Mechanical: Fusion 360 model with motors at each joint",
  },
  { src: `${DIR}/robot2.jpg`, caption: "Wood prototype to test mechanisms" },
  { src: `${DIR}/robot3.jpg`, caption: "Aluminium frame for lightweight stability" },
  { src: `${DIR}/robot4.jpg`, caption: "Final robot with all components" },
];

const script = [
  "ACT 1: Two humans wake up as robots",
  'name5: "I woke up today and I was not human..."',
  "name2: \"Dude, same I don't know what's happening...\"",
  "ACT 2: Older robots notice the confused newcomers",
  "3antar: *dancing dramatically*",
  'name3: "my man what are you doing!"',
];

export default function FifiRobot() {
  return (
    <>
      <p>A theatrical robotic performance project by Jannah and Fatema.</p>
      <VideoEmbed
        src="https://www.youtube.com/embed/Z11REMjYteA"
        title="FIFI final performance"
      />

      <WriteupSection title="Project Timeline">
        <Columns>
          <Panel title="September 24">
            <p>Initial concept and story development.</p>
            <ExternalLink href="https://www.youtube.com/watch?v=lRXLAeogv5U">
              Inspiration music
            </ExternalLink>
          </Panel>
          <Panel title="October 1">
            <p>Initial controller implementation.</p>
            <ExternalLink href="https://youtube.com/shorts/kRtGvE6MrPE">
              Controller demo
            </ExternalLink>
          </Panel>
        </Columns>
      </WriteupSection>

      <WriteupSection title="Performance Concept">
        <Columns>
          <Panel title="Robot Characters">
            <BulletList
              items={[
                "3antar (Egyptian/Arab identity)",
                "Explorer robots (various identities)",
                "Therapist/counselor robot",
              ]}
            />
          </Panel>
          <Panel title="Script Excerpt">
            <BulletList items={script} />
          </Panel>
        </Columns>
      </WriteupSection>

      <WriteupSection title="Robot Design & Production">
        <Gallery images={build} />
        <Panel title="Production Challenges">
          <BulletList
            items={[
              "Difficulty working with aluminium (drilling, stabilization)",
              "Motor shaft stabilization issues",
              "Final solution: welding shaft to hub",
              "Added extended wheels for stability",
            ]}
          />
        </Panel>
      </WriteupSection>

      <FifiTechnical />
    </>
  );
}
