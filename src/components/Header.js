import React from 'react'

const Header = ({logo, title, firstName}) => {
    return (
        <div className="header">
            <img src={logo}/>
            <h2 className="title">{title}</h2>
            <a href="/profile">Welcome {firstName}</a>
        </div>
    )
}

export default Header
