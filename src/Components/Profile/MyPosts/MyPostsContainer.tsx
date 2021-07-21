import React from "react";
import {addPostAC, ProfilePageType, updateNewPostAC} from "../../../redux/ProfileReducer";
import { RootStateType} from "../../../redux/ReduxStore";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPostCallback: (newPostText: string) => void
    onChangeCallback: (newText: string) => void
}

export type MyPostsPropsType = MapStatePropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPostCallback: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        onChangeCallback: (newText: string) => {
            dispatch(updateNewPostAC(newText))
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
