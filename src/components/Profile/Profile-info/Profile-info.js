import React from "react";
import style from './Profile-info.module.css';

const ProfileInfo = () => {
    return (
        <div className={style.profileInfo}>
            <div className={style.topInfo}>
                <div className={style.shortInfo}>
                    <div className={style.avatar}>
                        <img src="https://html.crumina.net/html-olympus/img/author-main1.jpg" alt="avatar"/>
                    </div>
                    <div className={style.name}>Artem Bozhok</div>
                    <div className={style.description}>Sumy, UA</div>
                </div>
            </div>
        </div>
    )

}

export default ProfileInfo;