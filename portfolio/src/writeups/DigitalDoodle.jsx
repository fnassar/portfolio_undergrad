import Columns from "./blocks/Columns.jsx";
import Gallery from "./blocks/Gallery.jsx";
import Panel from "./blocks/Panel.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const UPLOADS = "https://intro.nyuadim.com/wp-content/uploads/2021/12";

const images = [
  { src: `${UPLOADS}/drawing-768x574.png`, alt: "A drawing made with Digital Doodle" },
  { src: `${UPLOADS}/IMG_4442-768x576.png`, alt: "The Digital Doodle setup" },
  { src: `${UPLOADS}/IMG_4452-768x576.png`, alt: "Arduino implementation" },
];

const lessons = [
  {
    title: "1. Preparation is Key",
    text: "During our presentation, a simple lighting issue caused panic. We learned to set up earlier, especially for projects prone to spontaneous errors.",
  },
  {
    title: "2. User Feedback",
    text: "We should have included visual/audio feedback when buttons are pressed to indicate which brush is active.",
  },
  {
    title: "3. Details Matter",
    text: "The finer details often take more time and effort than the core functionality, but they're what brings the project together.",
  },
];

const showcaseVideos = ["657146942", "657147229", "657145943"];

export default function DigitalDoodle() {
  return (
    <>
      <p>
        The Digital Doodle project is designed to bring out the inner child in everyone.
        It allows users to create art using their hands, with the freedom to choose from
        five different brushes and a color selector.
      </p>
      <Gallery images={images} />

      <WriteupSection title="Implementation">
        <p>
          There were mainly two aspects of this project, the Processing aspect and the
          Arduino aspect (and serial communication), which is also how the work was split
          between us.
        </p>
        <p>
          Fatema created the generative art pieces that played the role of our brushes and
          worked on the fiducial tracking, while Ingy focused on the Arduino side: wiring
          up the buttons and slide potentiometer, creating the color gradient and its code
          on Processing, and the serial communication between Arduino and Processing.
        </p>
        <p>
          We found ourselves working together most of the time, helping each other when
          stuck, so it eventually turned into us working together on most aspects of the
          project.
        </p>
      </WriteupSection>

      <WriteupSection title="Lessons Learned">
        <Columns>
          {lessons.map((lesson) => (
            <Panel key={lesson.title} title={lesson.title}>
              <p>{lesson.text}</p>
            </Panel>
          ))}
        </Columns>
      </WriteupSection>

      <WriteupSection title="Showcase">
        <p>
          Some unique masterpieces created during our showcase. It was fascinating to see
          how differently people interacted with the project!
        </p>
        <Columns>
          {showcaseVideos.map((id) => (
            <VideoEmbed
              key={id}
              src={`https://player.vimeo.com/video/${id}`}
              title="Showcase video"
            />
          ))}
        </Columns>
      </WriteupSection>
    </>
  );
}
