// frontend/src/components/UserPost.js
import React, { useState } from "react";
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
                        <span style={{
                            color: "hsl(245, 30%, 90%)",
                            fontSize: "calc(0.8rem + 0.8vw)",
                        }}>
                            I am a software engineer with a background in
                            mathematics and education. I am passionate about
                            creating beautiful and functional software that
                            makes a positive impact on the world. I am seeking a
                            full-time position as a software engineer.
                        </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
