import React from "react";
import style from './Post-item.module.css';

const PostItem = (props) => {
    return (
        <div className={style.post}>
            <div className={style.header}>
                <div className={style.avatar}><img src="https://html.crumina.net/html-olympus/img/author-main1.jpg" alt="avatar"/></div>
                <div className="wrapper">
                    <div className="name">
                        Artem
                    </div>
                    <div className="date">
                        20.08.2020
                    </div>
                </div>
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="bottom">
                <button>like</button>
                <span className="likeCount">{props.likeCount}</span>
            </div>
        </div>
    )
}

export default PostItem;