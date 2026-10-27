import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../../../App.css";

const DigitalDoodle = () => {
  return (
    <div className="App blue-bg text-light py-5" id="home">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Digital Doodle</h1>
          <h3 className="text-secondary mb-4">
            By: Ingy el sheikh & Fatema Nassar
          </h3>
          <p className="lead mx-auto" style={{ maxWidth: "800px" }}>
            This project is a digital doodle that allows users to draw on a
            screen using their hands. It features five different brushes and a
            color selector for a fun and interactive experience.
          </p>
          <img
            src="https://intro.nyuadim.com/wp-content/uploads/2021/12/drawing-768x574.png"
            alt="Digital Doodle"
            className="img-fluid rounded shadow-lg mt-4"
            style={{ maxHeight: "500px" }}
          />
        </section>

        {/* Project Overview */}
        <section className="my-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-4">Project Overview</h2>
              <p className="lead">
                The Digital Doodle project is designed to bring out the inner
                child in everyone. It allows users to create art using their
                hands, with the freedom to choose from five different brushes
                and a color selector. This project aims to provide a fun and
                immersive experience for all users.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://intro.nyuadim.com/wp-content/uploads/2021/12/IMG_4442-768x576.png"
                alt="Digital Doodle"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="my-5 py-4">
          <h2 className="fw-bold mb-4">Implementation</h2>
          <div className="row">
            <div className="col-lg-6 order-lg-2">
              <img
                src="https://intro.nyuadim.com/wp-content/uploads/2021/12/IMG_4452-768x576.png"
                alt="Implementation"
                className="img-fluid rounded shadow-lg mb-4"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <p>
                There were mainly two aspects of this project, the{" "}
                <span className="text-info">processing</span> aspect and the{" "}
                <span className="text-info">Arduino</span> aspect (and serial
                communication). This is essentially also how we split the work
                between us. Fatema essentially took on the challenge of the
                processing side of things and I took on the challenge of the
                Arduino side of things and the blog documentations.
              </p>
              <p>
                Fatema created the beautiful generative art pieces that played
                the role of our brushes, and worked on the fiducial tracking as
                well (which was a pain! so she did a great job). While I focused
                on the Arduino side of things, wiring up the buttons and slide
                potentiometer, creating the color gradient and its code on
                processing, and creating the serial communication between
                Arduino and processing.
              </p>
              <p>
                We found ourselves working together most of the time, helping
                each other when stuck. So it eventually turned into us working
                together on most aspects of the project rather than individually
                which worked out great!
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="my-5 py-4">
          <h2 className="fw-bold mb-4">Lessons Learned</h2>
          <p className="lead mb-4">
            This project helped us grow significantly. Here are our key
            takeaways for improvement:
          </p>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card bg-transparent text-light border-0 shadow mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    1. Preparation is Key
                  </h5>
                  <p>
                    During our presentation, a simple lighting issue caused
                    panic. We learned to set up earlier, especially for projects
                    prone to spontaneous errors.
                  </p>
                </div>
              </div>
              <div className="card bg-transparent text-light border-0 shadow mb-3">
                <div className="card-body">
                  <h5 className="card-title text-warning">2. User Feedback</h5>
                  <p>
                    We should have included visual/audio feedback when buttons
                    are pressed to indicate which brush is active.
                  </p>
                </div>
              </div>
              <div className="card bg-transparent text-light border-0 shadow">
                <div className="card-body">
                  <h5 className="card-title text-warning">3. Details Matter</h5>
                  <p>
                    The finer details often take more time and effort than the
                    core functionality, but they're what brings the project
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section className="my-5 py-4">
          <h2 className="fw-bold mb-4 text-center">Showcase</h2>
          <p className="lead text-center mb-5">
            Here are some unique masterpieces created during our showcase. It
            was fascinating to see how differently people interacted with our
            project!
          </p>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://player.vimeo.com/video/657146942?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Vimeo video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded shadow"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://player.vimeo.com/video/657147229?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Vimeo video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded shadow"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://player.vimeo.com/video/657145943?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  title="Vimeo video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded shadow"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalDoodle;
