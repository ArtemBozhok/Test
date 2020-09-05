import React from "react";
import style from './Message-form.module.css'
import {actionCreatorAddMessage, actionCreatorUpdateMessage} from "../../Redux/Dialogs-reducer";

const MessageForm = (props) => {
    let messageForm = React.createRef();

    function sendMessage() {
        props.dispatch(actionCreatorAddMessage());
    }

    function updateMessage() {
        let text = messageForm.current.value;
        props.dispatch(actionCreatorUpdateMessage(text));
    }

    return (
        <div className={style.form}>
            <textarea onChange={updateMessage} value={props.text} ref={messageForm}></textarea>
            <button className={style.btn} onClick={sendMessage}>Отправить</button>
        </div>
    )
}

export default MessageForm;