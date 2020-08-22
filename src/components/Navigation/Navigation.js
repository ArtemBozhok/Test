import React from "react";
import style from './Navigation.module.css';

const Nav = () => {
    return (
        <nav className={style.siteNav}>
            <ul>
                <li><a className={style.item} href="/profile">Profile</a></li>
                <li><a className={style.item} href="/messages">Messages</a></li>
                <li><a className={style.item} href="/news">News</a></li>
                <li><a className={style.item} href="/music">Music</a></li>
                <li><a className={style.item} href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;