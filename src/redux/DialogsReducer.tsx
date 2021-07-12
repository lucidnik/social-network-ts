import {ActionTypes} from "./ReduxStore";


export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    message: string
    likesCount: number
}

let initialState = {
    newMessageText: '',
    dialogs: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Andrei'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Angelo'}
    ],
    messages: [
        {message: 'Sup', likesCount: 1},
        {message: 'Yo', likesCount: 1},
        {message: 'Hey', likesCount: 1},
        {message: 'Hi', likesCount: 1},
        {message: 'Howdy', likesCount: 1},
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState , action: ActionTypes) => {
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

export const addMessageAC = (newMessageText: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessageText: newMessageText
    } as const;
};
export const updateNewMessageAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: newText
    } as const;
};