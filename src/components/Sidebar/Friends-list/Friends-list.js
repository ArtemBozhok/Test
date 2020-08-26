import React from "react";
import style from './friends-list.module.css'
import FriendItem from "./Friend-item/Friend-item";

const FriendsList = (props) => {
    let friendsList = props.state;
    let freindsComponents = friendsList.map(friend => <FriendItem avatar={friend.avatar} status={friend.status}/>)

    return (
        <div className={style.list}>
            <h3 className={style.head}>Friends</h3>
            <div className={style.wrapper}>
                {freindsComponents}
            </div>
        </div>
    )
};

export default FriendsList;