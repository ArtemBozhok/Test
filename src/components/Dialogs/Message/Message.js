import React from "react";
import style from './Message.module.css'

const Message = (props) => {
    let selector = props.isMine ? `${style.message} ${style.right}` : style.message;
    return (
        <div className={selector}>{props.text}</div>
    )
}

export default Message;