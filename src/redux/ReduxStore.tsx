import {combineReducers, createStore} from "redux";
import {addMessage, dialogsReducer, updateNewMessageText} from "./DialogsReducer";
import {addPostAC, profileReducer, setUserProfile, updateNewPostAC} from "./ProfileReducer";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, usersReducer} from "./UsersReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>

export type RootStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

export let store = createStore(rootReducer);

declare const window: any;

window.store = store;
