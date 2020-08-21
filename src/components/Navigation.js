import React from "react";
import style from './Navigation.module.css';

const Nav = () => {
    return (
        <nav className={style.siteNav}>
            <ul>
                <li><a className={style.item} href="#">Profile</a></li>
                <li><a className={style.item} href="#">Messages</a></li>
                <li><a className={style.item} href="#">News</a></li>
                <li><a className={style.item} href="#">Music</a></li>
                <li><a className={style.item} href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;