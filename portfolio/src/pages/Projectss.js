// frontend/src/components/UserPost.js
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import cards from "./projects.json";
// import logo from './logo.png';
// import logo from './logo.png';
// import logo from './logo.png';


const Projectss = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (cardId) => {
        setActiveCard(cardId);
        // console.log current path
        console.log(window.location.pathname);
        // log current file content
        console.log(window.location.href)
    };

    const handleClose = () => {
        setActiveCard(null);
    };

    return (
        <div className="App zIndex2" id="projects">
            <div className="container mt-5" style={{ minHeight: "90vh" }}>
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 className="f-1">Projects</h1>
                    </div>
                </div>
                {/* make height full screen */}
                <div className="d-flex justify-content-center">
                    <div className="row">
                        {/* cards */}
                        {cards.map((card) => (
                            <div className="col-12 col-md-4 my-2 my-md-0 d-flex justify-content-center " key={card.id}>
                                <div
                                    className="container_foto rounded hover-shadow"
                                    onClick={() => handleCardClick(card.id)}
                                >
                                    <div className="ver_mas text-center px-2 pt-3 pb-5 d-flex justify-content-center align-items-center">
                                        <span>{card.description}</span>
                                    </div>
                                    <article className="text-center p-2 d-flex justify-content-center flex-column">
                                        <h2>{card.title}</h2>
                                        <h4>{card.subtitle}</h4>
                                    </article>
                                    <img src={card.image} alt="" />
                                </div>
                                {/* </div> */}
                                {/* </div> */}

                                <Modal
                                    show={activeCard === card.id}
                                    onHide={handleClose}
                                    dialogClassName="modal-fullscreen modal-dialog-centered modal-dialog-scrollable"
                                >
                                    {/* make header centered */}
                                    <Modal.Header closeButton>
                                        <Modal.Title className="text-light">
                                            <h2>{card.title}</h2>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="d-flex flex-column justify-content-start align-items-center">
                                        <div className="d-flex flex-column justify-content-center align-items-center text-light mask-costume text-light w-75">
                                            {card.projects.map((project) => (
                                                <div
                                                    key={project.key}
                                                    className="row d-flex mb-3 mt-3 flex-row justify-content-center align-items-center hover-zoom w-100"
                                                >
                                                    <div
                                                        className="modal-css col-9 g-col-2"
                                                        key={project.key}
                                                    >
                                                        <h3>
                                                            <a
                                                                className="link-hover-decoration text-decoration-none text-light"
                                                                href={
                                                                    project.url
                                                                }
                                                            >
                                                                {project.title}
                                                            </a>
                                                        </h3>
                                                        <span>
                                                            {
                                                                project.description
                                                            }
                                                        </span>
                                                    </div>
                                                    <img
                                                        className="col-2 rounded-circle p-2 precious-img"
                                                        src={project.image}
                                                        alt=""
                                                        // width for md screen
                                                        // style={ {height: "20vh", width: "20vh"} }
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <button
                                            className="btn btn-secondary"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projectss;

{
    /* d-flex justify-content-center */
}
{
    /* <Card
                                    className="mb-1 card mx-auto hover-zoom"
                                    // height = card width * 1.5
                                    style={{
                                        width: "18rem",
                                        maxWidth: "100%",
                                        height: "27rem",
                                        maxheight: "100%",
                                    }}
                                    onClick={() => handleCardClick(card.id)}
                                >
                                    <Card.Img variant="top" src={card.image} />
                                    <Card.ImgOverlay className="d-flex flex-column justify-content-center">
                                        <Card.Title className="text-light">{card.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-secondary">
                                            {card.subtitle}
                                        </Card.Subtitle>
                                        <Card.Text className="text-light">
                                            {card.description}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card> */
}
{
    /* <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 container_foto "> */
}
{
    /* <div class=" container text-center"> */
}
