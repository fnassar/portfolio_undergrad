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
                                What you are seeing now is my portfolio, The work of the last 4+ years of my life, and explanations on a lot of what I did, my interests and experiences, my passions, and things I care about. <br>
                                First, My introduction is that I am a passionate programmer, I love problem-solving and finding ways to do things I did not previously know I could do, and I probably like debugging more than I should. Besides that, however, I also have an inner artist in me that I cannot seem to suppress. I found the interactive media major in my undergrad to be an outlet for my artistic self, a way to express, create, and show a part of me one cannot see in a program with a set output requirement. <br>
                                There is a lot more to anyone than meets the eye. Still, talking about myself, I know that breaking an algorithm with a group that interacts, learning from one another, and finding new tools while developing new connections is how I wish to spend the next couple years of my life.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
