// frontend/src/components/UserPost.js
import React from "react";
// import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    return (
        <div className="App" id="about">
            <div className="container mt-5" style={{ minHeight: "90vh" }}>
                <div className="row mb-5 d-flex justify-content-center">
                    <div className="col-12">
                        <h1 className="f-1">About</h1>
                    </div>
                    <div className="col-9 m-5 p-5">
                        <p className="f-1">
                            <span
                                style={{
                                    color: "hsl(245, 30%, 90%)",
                                    fontSize: "calc(0.6rem + 0.6vw)",
                                }}
                            >
                                I am a current student at NYU AD studying
                                computer Science and Interactive Media.{" "}
                                <br></br>
                                For a student still in undergrad, I am always on
                                path to look for my interests and passion.
                                Always wondering and switching between both
                                majors, wondering which path to take, I have
                                found I have most interest in the intersection
                                of both majors. <br></br> From my computer
                                science background I have found most interest in
                                NLP and fullstack development. For Interactive
                                media, I find the love I have for creativity
                                taking shape through the years. From robotics to
                                many different froms of reaching out to people
                                and sending a message through interactive art
                                projects, I knew which fields in the major I
                                took most interest in. <br></br> I am always
                                looking for new opportunities to learn and grow,
                                while trying to expres my creativity in one way
                                or another. <br></br> I am currently looking for
                                a full time position after graduation in May
                                2024 in the fields I talked about above.{" "}
                                <br></br> Feel free to reach out to me for any
                                opportunities or just to say hi!<br></br>
                                {/* I am a software engineer with a background in
                                mathematics and education. I am passionate about
                                creating beautiful and functional software that
                                makes a positive impact on the world. I am
                                seeking a full-time position as a software
                                engineer. */}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
