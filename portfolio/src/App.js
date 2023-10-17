// frontend/src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import "./App.css";

// import Opening from "./pages/Opening.js";
import Backg from "./pages/Backg.js";
import Home from "./pages/Home.js";
import Projectss from "./pages/Projectss.js";
import Nav from "./pages/Nav.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
const App = () => {
    return (
        <div className="blue-bg">
            <Cursor
                isGelly={true}
                cursorBackgrounColor={"hsla(245, 30%, 90%, 50%)"}
            />
            {/* <CostumeCursor key="x0" /> */}
            <Backg key="x1" />
            <Nav key="x2" />
            {/* <Opening key="x1" /> */}
            <Home key="x3" />
            <About key="x4" />
            <Projectss key="x5" />
            <Contact key="x6" />
        </div>
    );
};

export default App;
