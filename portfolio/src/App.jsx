// frontend/src/App.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-creative-cursor/dist/styles.css";
import "./App.css";
// import { NavLink } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Projectss from "./pages/Projectss.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
    return (
        <div className="blue-bg">
            <Home key="x3" />
            <About key="x4" />
            <Projectss key="x5" />
            <Contact key="x6" />
        </div>
    );
};

export default App;
