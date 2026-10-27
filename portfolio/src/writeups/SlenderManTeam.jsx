import ExternalLink from "../components/ExternalLink.jsx";
import Columns from "./blocks/Columns.jsx";
import Panel from "./blocks/Panel.jsx";
import Quote from "./blocks/Quote.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

export default function SlenderManTeam({ t }) {
  return (
    <WriteupSection title={t.title}>
      <Columns>
        <Panel title="Fatema Nassar">
          <Quote text={t.fatemaQuote} />
          <p>{t.fatemaFocus}</p>
          <p>{t.fatemaChallenges}</p>
        </Panel>
        <Panel title="Andres Ugartechea">
          <Quote text={t.andresQuote} />
          <p>{t.andresFocus}</p>
          <p>
            {t.andresChallenges}{" "}
            <ExternalLink href="https://github.com/ml5js/ml5-library/issues/383">
              {t.iosLink}
            </ExternalLink>
            .
          </p>
        </Panel>
      </Columns>
      <p>{t.next}</p>
    </WriteupSection>
  );
}
