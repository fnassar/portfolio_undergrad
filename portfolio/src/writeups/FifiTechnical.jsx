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

export default function FifiTechnical({ t }) {
  return (
    <WriteupSection title={t.techTitle}>
      <Collapsible title={t.wheelsTitle} open>
        <p>{t.wheels}</p>
        <CodeBlock code={wheelsCode} />
      </Collapsible>
      <Collapsible title={t.transmitterTitle}>
        <p>{t.transmitter}</p>
        <CodeBlock code={statesCode} />
      </Collapsible>
      <Collapsible title={t.receiverTitle}>
        <p>{t.receiver}</p>
        <BulletList items={t.receiverParts} />
      </Collapsible>
    </WriteupSection>
  );
}
