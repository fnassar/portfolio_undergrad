import Gallery from "./blocks/Gallery.jsx";
import VideoEmbed from "./blocks/VideoEmbed.jsx";
import WriteupSection from "./blocks/WriteupSection.jsx";

const images = [
  { src: "/images/IM/docs/morse_code_sample.png", alt: "Animation and setup" },
  { src: "/images/IM/docs/morse_code_1.jpeg", alt: "Sample love story output" },
  {
    src: "/images/IM/docs/morse_code_3.jpeg",
    alt: "Sample love story output screenshot",
  },
];

export default function MorseCode() {
  return (
    <>
      <WriteupSection title="Final Presentation">
        <VideoEmbed
          src="https://www.youtube.com/embed/O0EYutk1-MQ"
          title="Animation video with voice over"
        />
        <Gallery images={images} />
      </WriteupSection>

      <WriteupSection title="Background and Inspiration">
        <p>
          The Louvre Museum in Abu Dhabi hosted a University take over the museum
          challenge. The prompt for the challenge was "Sustainability, tangibility", the
          art work, whatever it is, has to show these concepts or reflect these concepts.
        </p>
        <p>
          On the museum website we found a poem by Al-Mutanabi, called "Love is What
          Prevents Tongues from Speaking". The title of the poem reflected a lot of what
          we wanted to work with, especially with morse code being a language that's not
          made for tongues to speak.
        </p>
      </WriteupSection>

      <WriteupSection title="Code: P5">
        <p>
          The animation on p5js was our first step. Part of our prototype. We did it so we
          can visualize what our project was and how to work with it, an animation of a
          spiral morse code that uses an input text, translates the letters to equivalent
          latin morse code characters.
        </p>
      </WriteupSection>
    </>
  );
}
