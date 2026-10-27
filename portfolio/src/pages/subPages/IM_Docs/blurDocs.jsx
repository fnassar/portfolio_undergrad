import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../../../App.css";

const BlurDocs = () => {
  return (
    <div className="blue-bg py-5 min-vh-100">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="text-light display-4 fw-bold">Live Coding Project</h1>
          <p className="text-light lead">
            A collaborative audio-visual experience
          </p>
        </div>

        {/* Video Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="ratio ratio-16x9 shadow-lg rounded-3 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/JBx1zRjg2ns?si=vI8xwcLli6SiF2kU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Hydra Section */}
            <section className="card bg-transparent border-light mb-5">
              <div className="card-body">
                <h2 className="text-light mb-4 fw-bold">
                  Hydra (Marta & Fatema)
                </h2>

                <div className="mb-4">
                  <p className="text-light">
                    For our visual side, we have decided to begin with vibrant
                    visuals characterized by dynamic, distorted light trails.
                    Our initial code included loading the image, modulating it
                    with a simple oscillator, and then blending it with the
                    original image, resulting in a blur effect. As we
                    progressed, we integrated more complex functions based on
                    various modulations.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-light">
                    As our project evolved, our goal was to synchronize our
                    visuals more seamlessly with the music, increasing in
                    intensity as the musical layers deepened. We incorporated a
                    series of 'mult(shape)' functions to help us calm down the
                    visuals during slower beats.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-light">
                    Finally, we placed all the visuals in an array and used CCV
                    to update them upon the addition of each new layer of music.
                    This enabled us to synchronize the transitions between the
                    music and visuals. Additionally, we integrated CCs into the
                    primary visual functions to enhance the piece with a more
                    audio-reactive experience.
                  </p>
                </div>

                <div className="text-center mt-4">
                  <a
                    href="https://github.com/fnassar/live_coding_final/blob/main/flock.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Final Visual Code
                  </a>
                </div>
              </div>
            </section>

            {/* Tidalcycles Section */}
            <section className="card bg-transparent border-light">
              <div className="card-body">
                <h2 className="text-light mb-4 fw-bold">
                  Tidalcycles (Bato & Jeongin)
                </h2>

                <div className="mb-4">
                  <p className="text-light">
                    For our final composition, our group created a smooth blend
                    of UK Garage and House music, set at a tempo of 128 BPM. The
                    track begins with a mellow melody that progresses up and
                    down in the E-flat minor scale. On top of this melody, we
                    layered a groovy UK Garage loop, establishing the mood and
                    setting the tone of the composition.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-light">
                    To gradually introduce rhythm to our composition, Jeong-In
                    layered various drum patterns, adding hi-hats, claps, and
                    bass drums one by one. On top of Jeong-In's drums, we
                    introduce another layer of classic UK Garage drum loop,
                    which completes the rhythmic structure of the composition.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-light">
                    Furthermore, we incorporated a crisp bass sound, which gave
                    the overall composition a euphoric vibe. After introducing
                    this element, we abruptly cut off the drums to create a
                    dramatic transition. At this point, we added a new melodic
                    layer, changing the atmosphere and breaking up the
                    repetitiveness of the track.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-light">
                    Finally, we added a vocal sample to the composition, which
                    was pitched up and down to create a more dynamic sound. This
                    vocal sample was introduced at the end of the composition,
                    creating a sense of closure and finality.
                  </p>
                </div>

                <div className="text-center mt-4">
                  <a
                    href="https://github.com/fnassar/live_coding_final/blob/main/flock.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-lg"
                  >
                    View Final Music Code
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurDocs;
