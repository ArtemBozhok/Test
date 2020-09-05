const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

export const actionCreatorAddPost = () => {
    return {type: ADD_POST}
}

export const actionCreatorUpdatePost = (text) => {
    return {type: UPDATE_POST, text: text}
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: (state.posts.length) + 1,
                text: state.newPostText,
                likeCount: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;