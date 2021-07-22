import {combineReducers, createStore} from "redux";
import {addMessageAC, dialogsReducer, updateNewMessageAC} from "./DialogsReducer";
import {addPostAC, profileReducer, updateNewPostAC} from "./ProfileReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>

export type RootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

export let store = createStore(rootReducer);

declare const window: any;

window.store = store;
