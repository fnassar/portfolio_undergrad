// frontend/src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import "./App.css";


// import Opening from "./pages/Opening.js";
import Backg from "./pages/Backg.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Nav from "./pages/Nav.js";
import About from "./pages/About.js";
const App = () => {
    return (
        <div className="blue-bg">
            <Cursor isGelly={true} cursorBackgrounColor={"hsla(245, 30%, 90%, 50%)"}/>
            <Backg key="x1" />
            <Nav key="x0"/>
            {/* <Opening key="x1" /> */}
            <Home key="x2" />
            <About key="x3" />
            <Projects key="x4" />
        </div>
    );
};

export default App;
