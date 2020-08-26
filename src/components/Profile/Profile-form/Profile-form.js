import React from "react";
import style from './Profile-form.module.css';


const ProfileForm = (props) => {
    let reactElement = React.createRef();
    let addPost = () => {
        let postValue = reactElement.current.value;
        props.addPost.addPost(postValue);
        reactElement.current.value = '';
    }
    let updateMessage = () => {
        let postValue = reactElement.current.value;
        props.addPost.updatePostText(postValue);
        console.log(reactElement.current.value);
    }
    return (
        <div className="form">
            avatar
            <textarea onChange={updateMessage} value={props.addPost.newPostText} ref={reactElement} cols="40" rows="5"></textarea>
            <div className={style.btnWrapper}>
                <button onClick={addPost}>Post comment</button>
                <button>Cancel</button>
            </div>
        </div>
    )
}

export default ProfileForm;