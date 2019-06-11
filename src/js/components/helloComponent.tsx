import * as React from 'react';
const logo = require("../../content/img/logo_1.png");

export const HelloComponent = () =>
    <div className="content">
        <nav className="nav__main">
            <img src={logo} alt="logo"/>
            <h2 className="title">Hello World</h2>
        </nav>
    </div>