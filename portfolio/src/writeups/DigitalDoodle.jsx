import useLanguage from "../hooks/useLanguage.js";
import ar from "../i18n/ar/digitalDoodle.json";
import en from "../i18n/en/digitalDoodle.json";
import Columns from "./blocks/Columns.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import Paragraphs from "./blocks/Paragraphs.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const text = { en, ar };
const UPLOADS = "https://intro.nyuadim.com/wp-content/uploads/2021/12";
const imageFiles = [
  "drawing-768x574.png",
  "IMG_4442-768x576.png",
  "IMG_4452-768x576.png",
];
const showcaseVideos = ["657146942", "657147229", "657145943"];

export default function DigitalDoodle() {
  const t = useLanguage().pick(text);
  const images = imageFiles.map((file, index) => ({
    src: `${UPLOADS}/${file}`,
    alt: t.images[index],
  }));

  return (
    <>
      <p>{t.intro}</p>
      <Gallery images={images} />

      <WriteupSection title={t.implementationTitle}>
        <Paragraphs items={t.implementation} />
      </WriteupSection>

      <WriteupSection title={t.lessonsTitle}>
        <Columns>
          {t.lessons.map((lesson) => (
            <Panel key={lesson.title} title={lesson.title}>
              <p>{lesson.text}</p>
            </Panel>
          ))}
        </Columns>
      </WriteupSection>

      <WriteupSection title={t.showcaseTitle}>
        <p>{t.showcase}</p>
        <Columns>
          {showcaseVideos.map((id) => (
            <VideoEmbed
              key={id}
              src={`https://player.vimeo.com/video/${id}`}
              title={t.videoTitle}
            />
          ))}
        </Columns>
      </WriteupSection>
    </>
  );
}
