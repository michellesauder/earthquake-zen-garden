// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Details from './components/Details';

const rootElement = document.getElementById("root");
const route = (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="profile" element={<Profile />} />
            <Route path="details" element={<Details />} />
        </Routes>
    </Router>
)

ReactDOM.render(route, rootElement);