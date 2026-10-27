import useLanguage from "../hooks/useLanguage.js";
import ar from "../i18n/ar/morseCode.json";
import en from "../i18n/en/morseCode.json";
import Gallery from "./blocks/Gallery.jsx";
import Paragraphs from "./blocks/Paragraphs.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const text = { en, ar };
const imageFiles = ["morse_code_sample.png", "morse_code_1.jpeg", "morse_code_3.jpeg"];

export default function MorseCode() {
  const t = useLanguage().pick(text);
  const images = imageFiles.map((file, index) => ({
    src: `/images/IM/docs/${file}`,
    alt: t.images[index],
  }));

  return (
    <>
      <WriteupSection title={t.presentationTitle}>
        <VideoEmbed
          src="https://www.youtube.com/embed/O0EYutk1-MQ"
          title={t.videoTitle}
        />
        <Gallery images={images} />
      </WriteupSection>

      <WriteupSection title={t.backgroundTitle}>
        <Paragraphs items={t.background} />
      </WriteupSection>

      <WriteupSection title={t.codeTitle}>
        <p>{t.code}</p>
      </WriteupSection>
    </>
  );
}
