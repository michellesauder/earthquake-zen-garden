import React from 'react';
import ReactDOM from 'react-dom';
import App from "../src/App/App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import data from './data.json';

const rootElement = document.getElementById("root");
const route = (
    <Router>
        <div className="App">
            <Header 
                logo={data.site.logoImage} 
                title={data.site.title} 
                firstName={data.profile.firstName} 
                />
        </div>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="profile" element={<Profile profile={data.profile}/>} />
            <Route path="/details/:id"  element={<Details />} />
        </Routes>
    </Router>
)

ReactDOM.render(route, rootElement);