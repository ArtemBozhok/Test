import React from "react";
import style from './friend-item.module.css'

const FriendItem = (props) => {
    let onlineStatus = props.status;
    return (
        <a className={style.item} href="#">
            <i className={style[onlineStatus] + ' ' + style.status}></i>
            <img src={props.avatar} alt="avatar"/>
        </a>
    )
}

export default FriendItem;