// frontend/src/components/UserPost.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
    return (
        <nav
            className="navbar navbar-expand-md navbar-light fixed-top mask-custom shadow-0 zIndex3"
            id="navbar"
        >
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <span style={{ color: "hsl(245, 30%, 90%)" }}>Fatema</span>
                    <span style={{ color: "hsl(245, 50%, 70%)" }}>Nassar</span>
                </a>
                <button
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navContent"
                    aria-controls="navContent"
                    aria-label="Expand Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link text-light hover-zoom"
                                style={{ fontSize: 15 }}
                                href="#about"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-light font-weight-bolder hover-zoom"
                                href="https://drive.google.com/file/d/1ckbqMKxZX5Nr0TSRWnV5z6MT6K6-gLFd/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-light font-weight-bolder hover-zoom"
                                style={{ fontSize: 15 }}
                                href="#projects"
                            >
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary disabled" //hover-zoom
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link text-secondary disabled" //hover-zoom
                                href="#experience"
                            >
                                Experience
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item me-3 me-md-0 hover-zoom">
                            <a
                                className="nav-link fs-5 text-light nav-mail1"
                                target="_blank"
                                id="nav-mail1"
                                rel="noreferrer"
                                href="mailto:fanassar2001@gmail.com"
                            >
                                <span
                                    className="iconify"
                                    data-icon="material-symbols:mail-outline"
                                ></span>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-md-0 hover-zoom">
                            <a
                                className="nav-link fs-5 text-light nav-mail2"
                                target="_blank"
                                id="nav-mail2"
                                rel="noreferrer"
                                href="mailto:fan6236@nyu.edu"
                            >
                                <span
                                    className="iconify"
                                    data-icon="mdi:email-edit-outline"
                                ></span>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-md-0 hover-zoom">
                            <a
                                className="nav-link fs-5 text-light nav-linkedin"
                                target="_blank"
                                id="nav-linkedin"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/fatema-nassar-39a392209/"
                            >
                                <span
                                    className="iconify"
                                    data-icon="bi:linkedin"
                                ></span>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-md-0 hover-zoom">
                            <a
                                className="nav-link fs-5 text-light nav-github"
                                target="_blank"
                                id="nav-github"
                                rel="noreferrer"
                                href="https://github.com/fnassar/"
                            >
                                <span
                                    className="iconify"
                                    data-icon="bi:github"
                                ></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
