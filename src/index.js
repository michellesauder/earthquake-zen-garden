import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Details from './components/Details';
import Header from './components/Header';
import { data } from './data';

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
            <Route path="/" element={<App features={data.data.features}/>} />
            <Route path="profile" element={<Profile profile={data.profile}/>} />
            <Route path="details" element={<Details />} />
        </Routes>
    </Router>
)

ReactDOM.render(route, rootElement);