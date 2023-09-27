// frontend/src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Opening from "./pages/Opening.js";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Nav from "./pages/Nav.js";
const App = () => {
    return (
        <div className="blue-bg">
            {/* nav bar */}
            <Nav key="x0"/>
            {/* nav end */}
            <Opening key="x1" />
            <Home key="x2" />
            <Projects key="x3" />
        </div>
    );
};

export default App;
