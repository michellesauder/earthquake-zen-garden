import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({logo, title, firstName}) => {
    return (
        <div className="header">
            <Link to={"/"}><img src={logo}/></Link>
            <h2 className="title">{title}</h2>
            <Link to={"/profile"}>Welcome {firstName}</Link>
        </div>
    )
}

export default Header
