import React from "react";
import style from './Profile.module.css';

const Profile = () => {
    return (
        <main className={style.siteContent}>
            <div className="main-bg">
                <img
                    src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"
                    alt="main"/>
            </div>
            <div className="profile">
                avatar
                name
                description
                <div className="posts">
                    <div className="post">
                        post1
                    </div>
                    <div className="post">
                        post2
                    </div>
                    <div className="post">
                        post3
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile;