// frontend/src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../../../App.css";

// import Opening from "./pages/Opening.js";
const MorseCode = () => {
  return (
    <div
      className="container-fluid blue-bg text-light py-4"
      style={{ minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1
              className="text-center mb-4 display-4 fw-bold"
              style={{ color: "#e3f2fd" }}
            >
              Love is the Universal Language
            </h1>

            <div className="card mb-4 border-0 bg-transparent">
              <div className="card-body">
                <h2
                  className="card-title text-center mb-4"
                  style={{ color: "#bbdefb" }}
                >
                  Final Presentation
                </h2>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/O0EYutk1-MQ"
                    title="Animation Video with Voice Over"
                    allowFullScreen
                    className="rounded shadow"
                  ></iframe>
                </div>

                <div className="row mt-3 g-3">
                  <div className="col-md-4 mb-3">
                    <img
                      src="/images/IM/docs/morse_code_sample.png"
                      alt="Animation and Setup"
                      className="img-fluid rounded shadow"
                      style={{
                        width: "100%", // Ensures responsiveness
                        height: "45vh",
                        objectFit: "cover", // Crops the image to fit the square
                        position: "relative",
                      }}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src="/images/IM/docs/morse_code_1.jpeg"
                      alt="Sample Love Story Output Photo"
                      className="img-fluid rounded shadow"
                      style={{
                        width: "100%", // Ensures responsiveness
                        height: "45vh",
                        objectFit: "cover", // Crops the image to fit the square
                        position: "relative",
                      }}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <img
                      src="/images/IM/docs/morse_code_3.jpeg"
                      alt="Sample Love Story Output Screenshot"
                      className="img-fluid rounded shadow"
                      style={{
                        width: "100%", // Ensures responsiveness
                        height: "45vh",
                        objectFit: "cover", // Crops the image to fit the square
                        position: "relative",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4 border-0 bg-transparent">
              <div className="card-body">
                <h2 className="card-title mb-3" style={{ color: "#bbdefb" }}>
                  Group Members
                </h2>
                <ul className="list-group list-group-flush bg-transparent">
                  <li className="list-group-item bg-transparent text-light border-secondary">
                    Fatema Nassar
                  </li>
                  <li className="list-group-item bg-transparent text-light border-secondary">
                    Genie Hou
                  </li>
                  <li className="list-group-item bg-transparent text-light border-secondary">
                    Jannah Mokhtar
                  </li>
                </ul>
              </div>
            </div>

            <div className="card mb-4 border-0 bg-transparent">
              <div className="card-body">
                <h2 className="card-title mb-3" style={{ color: "#bbdefb" }}>
                  Background and Inspiration
                </h2>
                <p className="card-text lead" style={{ color: "#e3f2fd" }}>
                  The Louvre Museum in Abu Dhabi hosted a University take over
                  the museum challenge. The prompt for the challenge was
                  "Sustainability, tangibility", the art work, whatever it is,
                  has to show these concepts or reflect these concepts.
                </p>
                <p className="card-text lead" style={{ color: "#e3f2fd" }}>
                  On the museum website we found a poem by Al-Mutanabi, called
                  "Love is What Prevents Tongues from Speaking". The title of
                  the poem reflected a lot of what we wanted to work with,
                  especially with morse code being a language that's not made
                  for tongues to speak.
                </p>
              </div>
            </div>

            <div className="card mb-4 border-0 bg-transparent">
              <div className="card-body">
                <h2 className="card-title mb-3" style={{ color: "#bbdefb" }}>
                  Code
                </h2>
                <h3 className="card-subtitle mb-2" style={{ color: "#90caf9" }}>
                  P5
                </h3>
                <p className="card-text lead" style={{ color: "#e3f2fd" }}>
                  The animation on p5js was our first step. Part of our
                  prototype. We did it so we can visualize what our project was
                  and how to work with it, an animation of a spiral morse code
                  that uses an input text, translates the letters to equivalent
                  latin morse code characters.
                </p>

                <a
                  href="https://github.com/fnassar/morseCode/"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MorseCode;

{
  /* add git url https://github.com/fnassar/morseCode/ */
}
{
  /* <div className="text-center mt-4"> */
}
{
  /* <a
          href="https://github.com/fnassar/morseCode/"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a> */
}
{
  /* </div> */
}
{
  /* </div> */
}
