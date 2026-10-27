import BulletList from "./blocks/BulletList.jsx";
import CodeBlock from "./blocks/CodeBlock.jsx";
import Collapsible from "./blocks/Collapsible.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const wheelsCode = `if (rc_values[RC_CH2] > 1600) {
  forward(map(rc_values[RC_CH2], 1600, 2100, 0, 255));
}
else if (rc_values[RC_CH2] < 1400) reverse(map(rc_values[RC_CH2], 1400, 900, 0, 255));
else if (rc_values[RC_CH1] > 1600) right(map(rc_values[RC_CH1], 1600, 2100, 0, 255));
else if (rc_values[RC_CH1] < 1400) left(map(rc_values[RC_CH1], 1400, 900, 0, 255));
else stop();`;

const statesCode = `char* theStates[] = {
  "0 robot nothing",
  "1 robot line1",
  ...
  "18 stop",
};`;

export default function FifiTechnical() {
  return (
    <WriteupSection title="Technical Implementation">
      <Collapsible title="Wheels Control System" open>
        <p>Mapped RC controller input to variable speeds for precise movement control.</p>
        <CodeBlock code={wheelsCode} />
      </Collapsible>
      <Collapsible title="Transmitter System">
        <p>Implemented state control for different performance actions.</p>
        <CodeBlock code={statesCode} />
      </Collapsible>
      <Collapsible title="Receiver System">
        <p>Audio-synchronized performance control with multiple subsystems:</p>
        <BulletList
          items={[
            "LED strip animation",
            "Servo-based dancing motions",
            "Talking mouth mechanism",
          ]}
        />
      </Collapsible>
    </WriteupSection>
  );
}
