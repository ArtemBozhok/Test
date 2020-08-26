import React from "react";
import Nav from "./Navigation/Navigation";
import FriendsList from "./Friends-list/Friends-list";
import './sidebar.css';

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <Nav/>
            <FriendsList state={props.state.onlineFriends}/>
        </aside>
    )
}

export default Sidebar;