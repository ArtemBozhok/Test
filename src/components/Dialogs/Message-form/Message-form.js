import React from "react";
import style from './Message-from.css'

const MessageForm = () => {
    function sendMessage() {
        alert(ReactMessageForm.current.value);
    }

    let ReactMessageForm = React.createRef();

    return (
        <div className={style.form}>
            <textarea ref={ReactMessageForm}></textarea>
            <button onClick={sendMessage}>Отправить</button>
        </div>
    )
}

export default MessageForm;