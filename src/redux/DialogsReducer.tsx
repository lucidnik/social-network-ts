import {ActionTypes, DialogsPageType, MessagesType,} from "./Store";

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage: MessagesType = {
                message: action.newMessageText,
                likesCount: 5
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            state.dialogs.push({id: 1, name: 'You'});
            break;
        case 'UPDATE_NEW_MESSAGE_TEXT':
            state.newMessageText = action.newText;
            break;
        default:
            return state;
    }
    return state;
};