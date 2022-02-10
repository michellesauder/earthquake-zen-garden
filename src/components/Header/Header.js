import React from 'react';
import { Link } from 'react-router-dom';
import '../../App/App.scss';

const Header = ({logo, title, firstName}) => {
    return (
        <header >
            <Link to={"/"}><img src={logo}/></Link>
            <h1 className="title">{title}</h1>
            <Link to={"/profile"}>Welcome {firstName}</Link>
        </header>
    )
}

export default Header
