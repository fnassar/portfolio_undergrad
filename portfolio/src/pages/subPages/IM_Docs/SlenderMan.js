import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../../../App.css";

const SlenderMan = () => {
  return (
    <div className="container-fluid blue-bg text-light py-5">
      <div className="container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-3 fw-bold text-warning">
            Slenderman's Scavenger Hunt
          </h1>
          <p className="lead text-muted">
            A multiplayer mobile AR game using ML5.js and Socket.io
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a
              href="https://github.com/fnassar/Slenderman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              View Code
            </a>
            <a
              href="https://slenderman-scavenger-hunt.glitch.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              Play Game
            </a>
            <a
              href="https://pinnate-scratch-honeysuckle.glitch.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary"
            >
              May 6th Version
            </a>
          </div>
        </header>

        {/* Description Section */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            I. Description
          </h2>
          <div className="card bg-transparent text-light border-warning">
            <div className="card-body">
              <p className="lead">
                <em>"Slenderman's Scavenger Hunt"</em> is a multiplayer online
                game inspired by
                <a
                  href="https://en.wikipedia.org/wiki/Slender_Man"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warning"
                >
                  {" "}
                  an Internet creepypasta from 2009
                </a>
                with the playability of the traditional game of scavenger hunt.
                The mobile-optimized website uses
                <a
                  href="https://ml5js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warning"
                >
                  {" "}
                  ML5.js
                </a>{" "}
                for object detection.
              </p>
              <p>
                Players enter a username and join a room (up to 5 players).
                Using their phone's camera, they scan objects to get location
                hints in this augmented reality scavenger hunt with a creepy
                Slenderman theme.
              </p>
            </div>
          </div>
        </section>

        {/* Design Evolution Section */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            II. Design & Evolution
          </h2>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title">
                    Wireframe & Mobile-First Approach
                  </h3>
                  <p>
                    We designed a simple, intuitive layout specifically for
                    mobile devices:
                  </p>
                  <pre className="bg-black p-3 rounded text-light">
                    {`@media only screen and (max-width: 850px) {
  /* Mobile-specific styles */
}`}
                  </pre>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <img
                  src="/images/IM/docs/slenderman/wireframe.png"
                  className="card-img-top p-2"
                  alt="Wireframe"
                />
              </div>
            </div>
          </div>

          <h3 className="mt-4 mb-3">UI Flow</h3>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div className="card bg-transparent text-light border-secondary">
                <img
                  src="/images/IM/docs/slenderman/one.png"
                  className="card-img-top"
                  alt="Login Screen"
                />
                <div className="card-body">
                  <p className="card-text small">Username & Room Entry</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card bg-transparent text-light border-secondary">
                <img
                  src="/images/IM/docs/slenderman/two.png"
                  className="card-img-top"
                  alt="Instructions"
                />
                <div className="card-body">
                  <p className="card-text small">Loading Screen</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card bg-transparent text-light border-secondary">
                <img
                  src="/images/IM/docs/slenderman/five.png"
                  className="card-img-top"
                  alt="Gameplay"
                />
                <div className="card-body">
                  <p className="card-text small">Gameplay with AR</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="card bg-transparent text-light border-secondary">
                <img
                  src="/images/IM/docs/slenderman/three.png"
                  className="card-img-top"
                  alt="Player Info"
                />
                <div className="card-body">
                  <p className="card-text small">Player Scores</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3 g-3">
            <div className="col-md-4">
              <div className="card bg-transparent text-light border-warning">
                <img
                  src="/images/IM/docs/slenderman/six.png"
                  className="card-img-top"
                  alt="Page Found"
                />
                <div className="card-body">
                  <h5 className="card-title">Page Found</h5>
                  <p className="card-text">
                    Visual confirmation when scanning succeeds
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent text-light border-warning">
                <img
                  src="/images/IM/docs/slenderman/seven.png"
                  className="card-img-top"
                  alt="Win Screen"
                />
                <div className="card-body">
                  <h5 className="card-title">Win Screen</h5>
                  <p className="card-text">
                    Displayed for the highest scoring player
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-transparent text-light border-warning">
                <img
                  src="/images/IM/docs/slenderman/eight.png"
                  className="card-img-top"
                  alt="Lose Screen"
                />
                <div className="card-body">
                  <h5 className="card-title">Lose Screen</h5>
                  <p className="card-text">Displayed for other players</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Testing Section */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            III. User Testing
          </h2>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title">Testing Process</h3>
                  <p>
                    We tested with campus community members familiar with the
                    environment. Testers included Professor Mathura Govindarajan
                    and IM Lab Manager Ume Hussain.
                  </p>
                  <div className="row g-2 mt-3">
                    <div className="col-6">
                      <img
                        src="/images/IM/docs/slenderman/test1.jpeg"
                        className="img-fluid rounded"
                        alt="Testing 1"
                      />
                    </div>
                    <div className="col-6">
                      <img
                        src="/images/IM/docs/slenderman/test2.jpeg"
                        className="img-fluid rounded"
                        alt="Testing 2"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="/images/IM/docs/slenderman/test3.jpeg"
                        className="img-fluid rounded"
                        alt="Testing 3"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="/images/IM/docs/slenderman/test4.jpeg"
                        className="img-fluid rounded"
                        alt="Testing 4"
                      />
                    </div>
                    <div className="col-4">
                      <img
                        src="/images/IM/docs/slenderman/test5.jpeg"
                        className="img-fluid rounded"
                        alt="Testing 5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title">Key Feedback</h3>
                  <ul className="list-group list-group-flush bg-transparent text-light">
                    <li className="list-group-item bg-transparent text-light text-light border-secondary">
                      <strong>Positive:</strong> Enjoyable gameplay and
                      attractive aesthetics
                    </li>
                    <li className="list-group-item bg-transparent text-light text-light border-secondary">
                      <strong>Issue:</strong> Some ML5.js model detection
                      glitches
                    </li>
                    <li className="list-group-item bg-transparent text-light text-light border-secondary">
                      <strong>UI Improvement:</strong> Make top-right button
                      more noticeable
                    </li>
                    <li className="list-group-item bg-transparent text-light text-light border-secondary">
                      <strong>Suggestion:</strong> Add sound effects for found
                      pages
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Improvements Section */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            IV. Future Improvements
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title">Expansion Ideas</h3>
                  <ul>
                    <li>Custom scavenger hunt creation tool</li>
                    <li>Enhanced Slenderman theme with jumpscares and music</li>
                    <li>Improved UI for the info button</li>
                    <li>Audio feedback for found pages</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning h-100">
                <div className="card-body">
                  <h3 className="card-title">Technical Improvements</h3>
                  <ul>
                    <li>Retrain ML models for better accuracy</li>
                    <li>Fix iOS/Android compatibility issues</li>
                    <li>Enhanced user personalization</li>
                    <li>Fix room-specific socket data issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            V. Technical Implementation
          </h2>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-info h-100">
                <div className="card-body">
                  <h3 className="card-title">Socket.io</h3>
                  <ul>
                    <li>Real-time multiplayer functionality</li>
                    <li>Room-based user management</li>
                    <li>Score synchronization across players</li>
                    <li>Game state management</li>
                  </ul>
                  <p className="text-secondary mt-3">
                    <small>
                      Note: Currently broadcasting to all rooms - needs fixing
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-info h-100">
                <div className="card-body">
                  <h3 className="card-title">ML5.js</h3>
                  <p>Used resources:</p>
                  <ul>
                    <li>
                      <a
                        href="https://learn.ml5js.org/#/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info"
                      >
                        ML5.js Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://thecodingtrain.com/learning/ml5/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info"
                      >
                        The Coding Train Tutorials
                      </a>
                    </li>
                  </ul>
                  <p>Implementation steps:</p>
                  <ol>
                    <li>Object Detection with COCO-SD</li>
                    <li>Feature Extractor Classification</li>
                    <li>Separate training page with model saving</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <h3 className="mb-3">Page Designs</h3>
          <div className="row g-2">
            {[
              "/images/IM/docs/slenderman/pages/alone.JPEG",
              "/images/IM/docs/slenderman/pages/cant_run.JPEG",
              "/images/IM/docs/slenderman/pages/dont_look.JPEG",
              "/images/IM/docs/slenderman/pages/follows.JPEG",
              "/images/IM/docs/slenderman/pages/forest.JPEG",
              "/images/IM/docs/slenderman/pages/help_me.JPEG",
              "/images/IM/docs/slenderman/pages/no_eyes.JPEG",
              "/images/IM/docs/slenderman/pages/nonono.JPEG",
            ].map((img, index) => (
              <div className="col-3 col-md-2" key={index}>
                <img
                  src={img}
                  className="img-fluid border border-secondary rounded"
                  alt={`Page ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <div className="row mt-4 g-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning">
                <div className="card-body">
                  <h3 className="card-title">Fatema's Challenges</h3>
                  <ul>
                    <li>Room-specific socket data issues</li>
                    <li>Win/lose screen display inconsistencies</li>
                    <li>Balancing gameplay mechanics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-warning">
                <div className="card-body">
                  <h3 className="card-title">Andres' Challenges</h3>
                  <ul>
                    <li>ML model training and accuracy</li>
                    <li>iOS compatibility issues</li>
                    <li>Color vs B/W page detection</li>
                  </ul>
                  <p className="mt-2">
                    <small className="text-muted">
                      <a
                        href="https://github.com/ml5js/ml5-library/issues/383"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info"
                      >
                        iOS compatibility issue reference
                      </a>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Reflections */}
        <section className="mb-5">
          <h2 className="border-bottom border-warning pb-2 mb-4">
            VI. Team Reflections
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-success h-100">
                <div className="card-body">
                  <h3 className="card-title">
                    <a
                      href="https://github.com/fnassar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      Fatema Nassar
                    </a>
                  </h3>
                  <blockquote className="blockquote">
                    <p>
                      "I really enjoyed every part of this project... While we
                      planned a different idea at the beginning, I think the
                      fact that we ended up with a game that is mostly in person
                      but still uses sockets as required by the class was our
                      greatest accomplishment."
                    </p>
                    <footer className="blockquote-footer mt-2 text-muted">
                      Fatema Nassar
                    </footer>
                  </blockquote>
                  <p>
                    Focus areas: Socket.io implementation, game logic, entry
                    page design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-success h-100">
                <div className="card-body">
                  <h3 className="card-title">
                    <a
                      href="https://github.com/andresugartechea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-success"
                    >
                      Andres Ugartechea
                    </a>
                  </h3>
                  <blockquote className="blockquote">
                    <p>
                      "This project was equally stressful and enjoyable to do...
                      I know this is only the tip of the machine learning's
                      iceberg, but for me, it was a great achievement to
                      understand its basic concepts."
                    </p>
                    <footer className="blockquote-footer mt-2 text-muted">
                      Andres Ugartechea
                    </footer>
                  </blockquote>
                  <p>
                    Focus areas: ML5.js implementation, game visuals, model
                    training
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-transparent text-light border-success mt-4">
            <div className="card-body text-center">
              <h3 className="card-title">Future Plans</h3>
              <p className="lead">
                Continue developing the game as a campus community-building
                activity
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 border-top border-warning">
          <h3 className="text-warning">Slenderman's Scavenger Hunt</h3>
          <p className="text-muted">
            Created by{" "}
            <a
              href="https://github.com/fnassar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning"
            >
              Fatema Nassar
            </a>{" "}
            and
            <a
              href="https://github.com/andresugartechea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warning"
            >
              {" "}
              Andres Ugartechea
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SlenderMan;
