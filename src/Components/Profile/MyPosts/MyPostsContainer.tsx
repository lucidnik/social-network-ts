import React from "react";
import {addPostAC, PostsType, updateNewPostAC} from "../../../redux/ProfileReducer";
import {ActionTypes} from "../../../redux/ReduxStore";
import MyPosts from "./MyPosts";

type PropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionTypes) => void
}


const MyPostsContainer = (props: PropsType) => {

    const addPostCallback = () => {
        props.dispatch(addPostAC(props.newPostText));
    };

    const onChangeCallback = (newText: string) => {
        props.dispatch(updateNewPostAC(newText));
    };

    return (
        <MyPosts posts={props.posts} newPostText={props.newPostText} addPostCallback={addPostCallback} onChangeCallback={onChangeCallback} />
    )
};

export default MyPostsContainer;
