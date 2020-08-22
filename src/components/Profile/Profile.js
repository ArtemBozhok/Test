import React from "react";
import style from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <main>
            <div className="main-bg">
                <img
                    src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                    alt="main"/>
            </div>
            <div className="profile">
                profile avatar
                profile name
                profile description
                <div className="form">
                    <textarea cols="30" rows="10"></textarea>
                    <button>Submit</button>
                </div>
                <Posts/>
            </div>
        </main>
    )
}

export default Profile;