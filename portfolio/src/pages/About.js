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
                                What you are seeing now is my portfolio, The work of the last 4+ years of my life, and explanations on a lot of what I did, my interests and experiences, my passions, and things I care about. </br>
                                First, My introduction is that I am a passionate programmer, I love problem-solving and finding ways to do things I did not previously know I could do, and I probably like debugging more than I should. Besides that, however, I also have an inner artist in me that I cannot seem to suppress. I found the interactive media major in my undergrad to be an outlet for my artistic self, a way to express, create, and show a part of me one cannot see in a program with a set output requirement. </br>
                                There is a lot more to anyone than meets the eye. Still, talking about myself, I know that breaking an algorithm with a group that interacts, learning from one another, and finding new tools while developing new connections is how I wish to spend the next couple years of my life.
                                {/*I am a current student at NYU AD studying
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
                                 I am a software engineer with a background in
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
