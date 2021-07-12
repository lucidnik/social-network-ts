import {combineReducers, createStore} from "redux";
import {addMessageAC, DialogsPageType, dialogsReducer, updateNewMessageAC} from "./DialogsReducer";
import {addPostAC, ProfilePageType, profileReducer, updateNewPostAC} from "./ProfileReducer";

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>

export type RootStateType = {
    profileReducer: ProfilePageType
    dialogsReducer: DialogsPageType
}

let reducers = combineReducers({
    dialogsReducer,
    profileReducer
});

export let store = createStore(reducers);