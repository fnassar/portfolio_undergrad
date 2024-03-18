import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Other1 from './pages/other1';
import Other2 from './pages/other2';
import { Cursor } from "react-creative-cursor";

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Backg from "./pages/Backg.js";
import Nav from "./pages/Nav.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cursor
      isGelly={true}
      cursorBackgrounColor={"hsla(245, 30%, 90%, 50%)"}
    />
    {/* <CostumeCursor key="x0" /> */}
    <Backg key="x1" />
    <Nav key="x2" />
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Other1" element={<Other1 />} />
        <Route path="/Other2" element={<Other2 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
