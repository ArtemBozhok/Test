import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./Dialog-item/Dialog-item";
import Message from "./Message/Message";
import MessageForm from "./Message-form/Message-form";

const Dialogs = (props) => {

    let dialogsData = props.state.dialogs;
    let messagesData = props.state.messages;
    console.log(messagesData);

    let dialogsComponents = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src}/>);
    let messagesComponents = messagesData.map(message => <Message isMine={message.isOwn} text={message.text} />);

    return (
        <main>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogs}>
                    <h2 className={style.head + ' ' + style.dialogHead}>Dialogs</h2>
                    {dialogsComponents}
                </div>
                <div className={style.messages}>
                    <h2 className={style.head}>Avatar + User Name</h2>
                    {messagesComponents}
                    <MessageForm/>
                </div>
            </div>
        </main>
    )
}

export default Dialogs;