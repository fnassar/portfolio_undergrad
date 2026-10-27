import useLanguage from "../hooks/useLanguage.js";
import ar from "../i18n/ar/liveCodingBlur.json";
import en from "../i18n/en/liveCodingBlur.json";
import Paragraphs from "./blocks/Paragraphs.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const text = { en, ar };

export default function LiveCodingBlur() {
  const t = useLanguage().pick(text);

  return (
    <>
      <p>{t.intro}</p>
      <VideoEmbed src="https://www.youtube.com/embed/JBx1zRjg2ns" title={t.videoTitle} />

      <WriteupSection title={t.hydraTitle}>
        <Paragraphs items={t.hydra} />
      </WriteupSection>

      <WriteupSection title={t.tidalTitle}>
        <Paragraphs items={t.tidal} />
      </WriteupSection>
    </>
  );
}
