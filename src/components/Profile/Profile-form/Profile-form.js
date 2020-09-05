import React from "react";
import style from './Profile-form.module.css';
import {actionCreatorAddPost, actionCreatorUpdatePost} from "../../Redux/Profile-reducer";


const ProfileForm = (props) => {
    let addPost = () => {
        props.dispatch(actionCreatorAddPost());
    }
    let updateMessage = (event) => {
        let postValue = event.target.value;
        props.dispatch(actionCreatorUpdatePost(postValue));
    }
    return (
        <div className="form">
            avatar
            <textarea onChange={updateMessage} value={props.state.newPostText} cols="40" rows="5"></textarea>
            <div className={style.btnWrapper}>
                <button onClick={addPost}>Post comment</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default ProfileForm;