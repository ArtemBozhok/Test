import React from "react";
import logo from './../images/logo.png';
import  style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.siteHeader}>
                <div className={style.siteLogo}>
                    <img src={logo} alt="Site Logo"/>
                </div>
        </header>
    )
}

export default Header