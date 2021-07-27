import {combineReducers, createStore} from "redux";
import {addMessageAC, dialogsReducer, updateNewMessageAC} from "./DialogsReducer";
import {addPostAC, profileReducer, updateNewPostAC} from "./ProfileReducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./UsersReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export type RootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

export let store = createStore(rootReducer);

declare const window: any;

window.store = store;
