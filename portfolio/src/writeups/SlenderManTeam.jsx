import Columns from "./blocks/Columns.jsx";
import ExternalLink from "../components/ExternalLink.jsx";
import Panel from "./blocks/Panel.jsx";
import Quote from "./blocks/Quote.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

export default function SlenderManTeam() {
  return (
    <WriteupSection title="VI. Team Reflections">
      <Columns>
        <Panel title="Fatema Nassar">
          <Quote text="I really enjoyed every part of this project... While we planned a different idea at the beginning, I think the fact that we ended up with a game that is mostly in person but still uses sockets as required by the class was our greatest accomplishment." />
          <p>Focus: Socket.io implementation, game logic, entry page design.</p>
          <p>
            Challenges: room-specific socket data, win/lose screen consistency, balancing
            gameplay.
          </p>
        </Panel>
        <Panel title="Andres Ugartechea">
          <Quote text="This project was equally stressful and enjoyable to do... I know this is only the tip of the machine learning's iceberg, but for me, it was a great achievement to understand its basic concepts." />
          <p>Focus: ML5.js implementation, game visuals, model training.</p>
          <p>
            Challenges: model accuracy, colour vs B/W page detection and{" "}
            <ExternalLink href="https://github.com/ml5js/ml5-library/issues/383">
              iOS compatibility
            </ExternalLink>
            .
          </p>
        </Panel>
      </Columns>
      <p>Next: continue developing the game as a campus community-building activity.</p>
    </WriteupSection>
  );
}
