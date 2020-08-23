import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./Dialog-item/Dialog-item";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogsData = [
        {id:1, name: 'Artem', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
        {id:2, name: 'Vita', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
        {id:3, name: 'Olena', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
        {id:4, name: 'Oleksandr', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
        {id:5, name: 'Dmutro', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
    ];

    let messagesData = [
        {id: 1, text: 'Lorem ipsum dolor.'},
        {id: 2, text: 'Lorem ipsum dolor. adad'},
        {id: 3, text: 'Lorem ipsum dolor. asdasd'},
        {id: 4, text: 'Lorem ipsum dolor. ashfhhjs'},
        {id: 5, text: 'Lorem ipsum dolor. asdfhskj'}
    ];

    let dialogsComponents = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} src={dialog.src}/>);
    let messagesComponents = messagesData.map(message => <Message text={message.text} />);

    return (
        <main>
            <h2>Dialogs</h2>
            <div className={style.dialogsWrapper}>
                <div className={style.dialogs}>
                    {dialogsComponents}
                </div>
                <div className={style.messages}>
                    {messagesComponents}
                </div>
            </div>
        </main>
    )
}

export default Dialogs;