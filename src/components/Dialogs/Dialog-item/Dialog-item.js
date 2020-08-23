import React from "react";
import style from './Dialog-item.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink activeClassName={style.active} to={`/messages/${props.id}`} className={style.dialog}>
            <div className={style.avatar}><img src={props.src} alt="avatar"/></div>
            <div className={style.name}>{props.name}</div>
        </NavLink>
    )
}

export default DialogItem;