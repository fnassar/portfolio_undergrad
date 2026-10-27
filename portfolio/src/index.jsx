import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Other1 from "./pages/subPages/other1";
import Other2 from "./pages/subPages/other2";
import BlurDocs from "./pages/subPages/IM_Docs/blurDocs";
import DigitalDoodle from "./pages/subPages/IM_Docs/DigitalDoodle";
import MorseCode from "./pages/subPages/IM_Docs/morseCode.jsx";
import FifiRobot from "./pages/subPages/IM_Docs/fifiRobot";
import SlenderMan from "./pages/subPages/IM_Docs/SlenderMan";

import { Cursor } from "react-creative-cursor";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Backg from "./pages/Backg.jsx";
import Nav from "./pages/Nav.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cursor isGelly={true} cursorBackgrounColor={"hsla(245, 30%, 90%, 50%)"} />
    {/* <CostumeCursor key="x0" /> */}
    <Backg key="x1" />
    <Nav key="x2" />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Other1" element={<Other1 />} />
        <Route path="/Other2" element={<Other2 />} />
        <Route path="/blurDocs" element={<BlurDocs />} />
        <Route path="/DigitalDoodle" element={<DigitalDoodle />} />
        <Route path="/MorseCode" element={<MorseCode />} />
        <Route path="/FifiRobot" element={<FifiRobot />} />
        <Route path="/SlenderMan" element={<SlenderMan />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

