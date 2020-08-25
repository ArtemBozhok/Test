import React from "react";
import style from './Navigation.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.siteNav}>
            <ul>
                <li><NavLink activeClassName={style.active} className={style.item} to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={style.active} className={style.item} to="/messages">Messages</NavLink></li>
                <li><NavLink activeClassName={style.active} className={style.item} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={style.active} className={style.item} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={style.active} className={style.item} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;