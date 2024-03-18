// frontend/src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./../App.css";

const Other2 = () => {
    return (
        <div className="App mt-5 zIndex-2" id="home">
            <div
                className="container-fluid d-flex justify-content-center align-items-center mt-5"
                style={{ minHeight: "90vh", maxHeight: "90vh !important" }}
            >
                <div className="row mb-5 py-2">
                    <div className="col-12">
                        {/* wrap text for phone size */}
                        <h1 className="mb-0 d-flex flex-wrap justify-content-center col-12">
                            Adobe Suite
                        </h1>
                    </div>
                    <div className="col-12 my-1">
                        {/* pics */}
                        <div className="row d-flex justify-content-center align-items-center py-3">
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <h2>TEXT-TITLE</h2>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center py-3">
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <h2>TEXT-TITLE</h2>
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center py-3">
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <img
                                    src="https://via.placeholder.com/300x400"
                                    alt="placeholder"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                                <h2>TEXT-TITLE</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other2;
