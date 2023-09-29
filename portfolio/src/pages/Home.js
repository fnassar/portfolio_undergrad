// frontend/src/components/UserPost.js
import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div className="App mt-5 zIndex-2" id="home">
            <div
                className="container-fluid d-flex justify-content-center align-items-center mt-5"
                style={{ minHeight: "90vh" }}
            >
                <div className="row mb-5">
                    <div className="col-12">
                        <h1 className="mb-0">
                            <span
                                style={{
                                    color: "hsl(245, 30%, 90%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "0.7",
                                }}
                            >
                                Fatema
                            </span>
                            <span
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "0.7",
                                }}
                            >
                                Nassar
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </h1>
                    </div>
                    <div className="col-12">
                        <h1 className="mb-5">
                            <span
                                style={{
                                    color: "hsl(245, 30%, 90%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "0.8",
                                }}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                فاطمة
                            </span>
                            <span
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "0.8",
                                }}
                            >
                                نصار
                            </span>
                        </h1>
                    </div>
                    <div className="col-12">
                        <h3>
                            <span
                                style={{
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                Computer Science & Interactive Media
                            </span>
                            <span
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                &nbsp;Student
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        </h3>
                    </div>
                    <div className="col-12">
                        <h3 className="text-light">
                            <span
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                طالبة&nbsp;
                            </span>
                            <span
                                style={{
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                حاسبات و معلومات و فنون تفاعلية
                            </span>
                        </h3>
                    </div>
                    <div className="col-12"></div>
                </div>
            </div>
        </div>
    );
};
export default Home;
