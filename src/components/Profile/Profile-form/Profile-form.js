import React from "react";
import style from './Profile-form.module.css';

const ProfileForm = () => {
    return (
        <div className="form">
            avatar
            <textarea cols="40" rows="5"></textarea>
            <div className={style.btnWrapper}>
                <button>Post comment</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default ProfileForm;