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
    id: number
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
        {message: 'Sup', id: 1},
        {message: 'Yo', id: 2},
        {message: 'Hey', id: 3},
        {message: 'Hi', id: 4},
        {message: 'Howdy', id: 5},
    ]
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypes): DialogsPageType => {

    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 7, message: action.newMessageText}],
                dialogs: [...state.dialogs, {id: 1, name: 'You'}]
            };
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
};

export const addMessage = (newMessageText: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessageText: newMessageText
    } as const;
};
export const updateNewMessageText = (newText: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_TEXT',
        newText: newText
    } as const;
};