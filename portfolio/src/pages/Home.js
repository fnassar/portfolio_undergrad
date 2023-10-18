// frontend/src/components/UserPost.js
import React from "react";
// import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    return (
        <div className="App mt-5 zIndex-2" id="home">
            <div
                className="container-fluid d-flex justify-content-center align-items-center mt-5"
                style={{ minHeight: "90vh", maxHeight: "90vh !important" }}
            >
                <div className="row mb-5">
                    <div className="col-12">
                        {/* wrap text for phone size */}
                        <h1 className="mb-0 d-flex flex-wrap justify-content-center col-8 col-md-10">
                            <span
                                className="text-left"
                                style={{
                                    color: "hsl(245, 30%, 90%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "1",
                                }}
                            >
                                Fatema
                            </span>
                            <span
                                className="text-left"
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "1",
                                }}
                            >
                                Nassar
                            </span>
                        </h1>
                    </div>
                    <div className="col-10">
                        <h1 className="mb-5 d-flex flex-wrap justify-content-end">
                            <span
                                style={{
                                    color: "hsl(245, 30%, 90%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "1",
                                }}
                            >
                                فاطمة
                            </span>
                            <span
                                style={{
                                    color: "hsl(245, 50%, 70%)",
                                    fontSize: "calc(3rem + 4vw)",
                                    lineHeight: "1",
                                }}
                            >
                                نصار
                            </span>
                        </h1>
                    </div>
                    <div className="col-12">
                        {/* <h3 className="mb-0 d-flex flex-wrap justify-content-center col-10 col-md-10"> */}
                        <h3 className="mb-0 d-flex flex-wrap justify-content-center col-9 col-md-10">
                            <span
                                className="text-align-left"
                                style={{
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                Computer Science & Interactive Media Student
                            </span>
                        </h3>
                    </div>
                    <div className="col-10">
                        <h3 className="mb-5 d-flex flex-wrap justify-content-end text-align-right text-light col-12 col-md-10">
                            <span
                                className="text-align-right"
                                style={{
                                    fontSize: "calc(1.2rem + 1vw)",
                                }}
                            >
                                طالبة حاسبات و معلومات و فنون تفاعلية
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
