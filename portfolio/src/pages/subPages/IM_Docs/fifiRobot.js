// frontend/src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../../../App.css";

// import Opening from "./pages/Opening.js";
const FifiRobot = () => {
  return (
    <div className="container-fluid blue-bg text-light py-5">
      <div className="container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-3 fw-bold text-warning">
            Performing Robot: FIFI
          </h1>
          <p className="lead">
            A theatrical robotic performance project by Jannah and Fatema
          </p>
        </header>

        {/* Video Showcase */}
        <section className="mb-5">
          <div className="ratio ratio-16x9 shadow-lg rounded-3 overflow-hidden mb-4">
            <iframe
              src="https://www.youtube.com/embed/Z11REMjYteA"
              title="FIFI Final Performance"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/shorts/Z11REMjYteA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-warning"
            >
              View on YouTube
            </a>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="mb-5">
          <h2 className="border-bottom border-secondary pb-2 mb-4">
            Project Timeline
          </h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title">September 24</h3>
                  <p className="card-text">
                    Initial concept and story development
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=lRXLAeogv5U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-light"
                  >
                    Inspiration Music
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card bg-transparent text-light border-secondary h-100">
                <div className="card-body">
                  <h3 className="card-title">October 1</h3>
                  <p className="card-text">Initial controller implementation</p>
                  <a
                    href="https://youtube.com/shorts/kRtGvE6MrPE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-light"
                  >
                    Controller Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Script */}
        <section className="mb-5">
          <h2 className="border-bottom border-secondary pb-2 mb-4">
            Performance Concept
          </h2>

          <div className="card bg-transparent text-light border-secondary mb-4">
            <div className="card-body">
              <h3 className="card-title">Robot Characters</h3>
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent text-light border-secondary">
                  3antar (Egyptian/Arab identity)
                </li>
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Explorer robots (Various identities)
                </li>
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Therapist/counselor robot
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-transparent text-light border-secondary">
            <div className="card-body">
              <h3 className="card-title">Script Excerpt</h3>
              <div className="p-3 bg-dark rounded">
                <p className="mb-2">
                  <strong>ACT 1:</strong> Two humans wake up as robots
                </p>
                <p className="mb-1 text-warning">
                  name5: "I woke up today and I was not human..."
                </p>
                <p className="mb-1 text-warning">
                  name2: "Dude, same I don't know what's happening..."
                </p>

                <p className="mt-3 mb-2">
                  <strong>ACT 2:</strong> Older robots notice the confused
                  newcomers
                </p>
                <p className="mb-1 text-warning">
                  3antar: *dancing dramatically*
                </p>
                <p className="mb-1 text-warning">
                  name3: "my man what are you doing!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Robot Design & Production */}
        <section className="mb-5">
          <h2 className="border-bottom border-secondary pb-2 mb-4">
            Robot Design & Production
          </h2>

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="card bg-transparent text-light border-secondary h-100">
                <img
                  src="/images/IM/docs/fifi/cactus.jpg"
                  className="card-img-top"
                  alt="Initial robot design"
                />
                <div className="card-body">
                  <h3 className="card-title">Concept Design</h3>
                  <p className="card-text">
                    Initial cactus-inspired robot design
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card bg-transparent text-light border-secondary h-100">
                <img
                  src="/images/IM/docs/fifi/robot1.jpg"
                  className="card-img-top"
                  alt="Mechanical design"
                />
                <div className="card-body">
                  <h3 className="card-title">Mechanical Design</h3>
                  <p className="card-text">
                    Fusion 360 model with motors at each joint
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-transparent text-light border-secondary h-100">
                <img
                  src="/images/IM/docs/fifi/robot2.jpg"
                  className="card-img-top"
                  alt="Wood prototype"
                />
                <div className="card-body">
                  <h3 className="card-title">Wood Prototype</h3>
                  <p className="card-text">
                    Initial wooden version to test mechanisms
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent text-light border-secondary h-100">
                <img
                  src="/images/IM/docs/fifi/robot3.jpg"
                  className="card-img-top"
                  alt="Metal frame"
                />
                <div className="card-body">
                  <h3 className="card-title">Metal Frame</h3>
                  <p className="card-text">
                    Aluminum construction for lightweight stability
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card bg-transparent text-light border-secondary h-100">
                <img
                  src="/images/IM/docs/fifi/robot4.jpg"
                  className="card-img-top"
                  alt="Final robot"
                />
                <div className="card-body">
                  <h3 className="card-title">Final Robot</h3>
                  <p className="card-text">
                    Completed performing robot with all components
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-transparent text-light border-secondary mt-4">
            <div className="card-body">
              <h3 className="card-title">Production Challenges</h3>
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Difficulty working with aluminum (drilling, stabilization)
                </li>
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Motor shaft stabilization issues
                </li>
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Final solution: Welding shaft to hub
                </li>
                <li className="list-group-item bg-transparent text-light border-secondary">
                  Added extended wheels for stability
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="mb-5">
          <h2 className="border-bottom border-secondary pb-2 mb-4">
            Technical Implementation
          </h2>

          <div className="accordion" id="techAccordion">
            {/* Wheels Control */}
            <div className="accordion-item bg-transparent text-light border-secondary mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button bg-dark text-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#wheelsControl"
                >
                  Wheels Control System
                </button>
              </h3>
              <div
                id="wheelsControl"
                className="accordion-collapse collapse show"
                data-bs-parent="#techAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Mapped RC controller input to variable speeds for precise
                    movement control.
                  </p>
                  <pre className="bg-dark p-3 rounded text-warning">
                    {`if (rc_values[RC_CH2] > 1600) {
  forward(map(rc_values[RC_CH2], 1600, 2100, 0, 255));
}
else if (rc_values[RC_CH2] < 1400) reverse(map(rc_values[RC_CH2], 1400, 900, 0, 255));
else if (rc_values[RC_CH1] > 1600) right(map(rc_values[RC_CH1], 1600, 2100, 0, 255));
else if (rc_values[RC_CH1] < 1400) left(map(rc_values[RC_CH1], 1400, 900, 0, 255));
else stop();`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Transmitter */}
            <div className="accordion-item bg-transparent text-light border-secondary mb-3">
              <h3 className="accordion-header">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#transmitter"
                >
                  Transmitter System
                </button>
              </h3>
              <div
                id="transmitter"
                className="accordion-collapse collapse"
                data-bs-parent="#techAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Implemented state control for different performance actions.
                  </p>
                  <pre className="bg-dark p-3 rounded text-warning">
                    {`char* theStates[] = {
  "0 robot nothing",
  "1 robot line1",
  ...
  "18 stop",
};`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Receiver */}
            <div className="accordion-item bg-transparent text-light border-secondary">
              <h3 className="accordion-header">
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#receiver"
                >
                  Receiver System
                </button>
              </h3>
              <div
                id="receiver"
                className="accordion-collapse collapse"
                data-bs-parent="#techAccordion"
              >
                <div className="accordion-body">
                  <p>
                    Audio-synchronized performance control with multiple
                    subsystems:
                  </p>
                  <ul className="list-group list-group-flush bg-transparent">
                    <li className="list-group-item bg-transparent text-light border-secondary">
                      LED strip animation
                    </li>
                    <li className="list-group-item bg-transparent text-light border-secondary">
                      Servo-based dancing motions
                    </li>
                    <li className="list-group-item bg-transparent text-light border-secondary">
                      Talking mouth mechanism
                    </li>
                  </ul>
                  <p className="mt-3">
                    Solved audio file issues by shortening filenames to 8
                    characters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-4 border-top border-secondary">
          <h3 className="text-warning">FIFI - The Performing Robot</h3>
          <p>Created by Jannah Mokhtar and Fatema Nassar</p>
        </footer>
      </div>
    </div>
  );
};
export default FifiRobot;
