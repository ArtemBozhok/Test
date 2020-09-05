const POST_MESSAGE = 'POST-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';

export const actionCreatorAddMessage = () => {
    return {type: POST_MESSAGE}
}

export const actionCreatorUpdateMessage = (text) => {
    return {type: UPDATE_MESSAGE, text: text}
}

const dialogReducer = (state, action) => {
    switch (action.type) {
        case POST_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                text: state.newMessageText,
                isOwn: true
            }
            if (newMessage.text === '') return;
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogReducer;